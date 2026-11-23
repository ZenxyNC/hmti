import { useEffect, useState, useMemo } from 'react';
import { supabase } from '../../../../supabase-client';

export function useKesanPesan() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitial = async () => {
      const { data, error } = await supabase
        .from('kesanpesan')
        .select('id, message, type, created_at, name')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setEntries(data);
      }
      setLoading(false);
    };

    fetchInitial();

    const channel = supabase
      .channel('public:kesanpesan')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'kesanpesan',
        },
        (payload) => {
          const { eventType, new: newRow, old: oldRow } = payload;

          setEntries((prev) => {
            switch (eventType) {
              case 'INSERT':
                if (prev.some((item) => item.id === newRow.id)) return prev;
                return [newRow, ...prev];

              case 'UPDATE':
                return prev.map((item) =>
                  item.id === newRow.id ? newRow : item
                );

              case 'DELETE':
                return prev.filter((item) => item.id !== oldRow.id);

              default:
                return prev;
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const kesanList = useMemo(
    () => entries.filter((item) => item.type === 'kesan'),
    [entries]
  );

  const pesanList = useMemo(
    () => entries.filter((item) => item.type === 'pesan'),
    [entries]
  );

  // `allEntries` is already sorted chronologically and updates in real time
  return {
    allEntries: entries,
    kesanList,
    pesanList,
    loading,
  };
}