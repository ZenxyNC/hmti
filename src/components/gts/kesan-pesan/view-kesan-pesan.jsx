import { useState } from "react";
import { useKesanPesan } from "./component/useKesanPesan";
import randomColor from "randomcolor";
import { Link } from "react-router-dom";
import ImmersiveView from "./component/immersiveview";

export default function ViewKesanPesan() {
  const { allEntries, kesanList, pesanList, loading } = useKesanPesan();

  const [selectedEntries, setSelectedEntries] = useState("semua")

  function generateColor(id) {
    return randomColor({
      seed: id,
      luminosity: 'light'
    })
  }

  function getSpecificEntries(entry) {
    if(entry == "semua") return allEntries;
    else if (entry == "kesan") return kesanList;
    else if (entry == "pesan") return pesanList;
    else return allEntries;
  }

  return (
    <>
      <ImmersiveView
        allEntries={allEntries}
      />
      <main className="w-full h-full bg-[#111] p-25! pt-20 text-white flex flex-col gap-5">
        <header className="flex flex-col gap-1">
          <span className="text-2xl text-text-sec">Kesan dan Pesan</span>
          <h1 className="text-[68px]! font-bold leading-tight">
            GOES TO SCHOOL<br />
            HMTI SCU
          </h1>
        </header>

        <div>
          <div className="w-max h-10 p-2 px-5 bg-secondary flex gap-3 items-center justify-center rounded-full border border-border">
            <div>
              {kesanList?.length ? kesanList.length : '0'} Kesan
            </div>
            <div className="h-full w-0.5 rounded-full bg-border"/>
            <div>
              {pesanList?.length ? pesanList.length : '0'} Pesan
            </div>
          </div>
        </div>

        <div className="w-full h-max flex flex-row items-center justify-between">
          <div className="w-max h-max flex gap-3">
            <button 
              className={`w-max h-max p-2 px-5 flex gap-3 items-center justify-center rounded-full border cursor-pointer hover:bg-secondary/40 ${selectedEntries == "semua" ? 'bg-secondary border-border text-text-pri' : 'bg-primary border-transparent text-text-sec'}`}
              onClick={(e) => setSelectedEntries("semua")}
            >
              Semua
            </button>
            <button 
              className={`w-max h-max p-2 px-5 flex gap-3 items-center justify-center rounded-full border cursor-pointer hover:bg-secondary/40 ${selectedEntries == "kesan" ? 'bg-secondary border-border text-text-pri' : 'bg-primary border-transparent text-text-sec'}`}
              onClick={(e) => setSelectedEntries("kesan")}
            >
              Kesan
            </button>
            <button 
              className={`w-max h-max p-2 px-5 flex gap-3 items-center justify-center rounded-full border cursor-pointer hover:bg-secondary/40 ${selectedEntries == "pesan" ? 'bg-secondary border-border text-text-pri' : 'bg-primary border-transparent text-text-sec'}`}
              onClick={(e) => setSelectedEntries("pesan")}
            >
              Pesan
            </button>
          </div>
          <Link to="#immersiveview" role="button" className="cursor-pointer w-max h-max p-2 px-5 bg-accent rounded-full border border-border">
            Immersive View
          </Link>
        </div>

        <section
          aria-label="Daftar kesan dan pesan"
          className="flex flex-wrap items-start justify-center gap-5"
        >
          {loading ? (
            <p>Memuat kesan dan pesan...</p>
          ) : (
            getSpecificEntries(selectedEntries).map((item) => (
              <article
                className="flex h-48 w-max min-w-70 max-w-100 flex-col gap-3 justify-between rounded-independent p-5 py-4 text-black"
                style={{ backgroundColor: generateColor(item.id) }}
              >
                <p className="wrap-break-word text-xl font-medium overflow-hidden">
                  {item.message}
                </p>
                <div className="flex justify-between gap-4 border-t border-black/40 pt-2 text-base font-semibold text-black/60">
                  <span className="max-w-[70%] truncate">{item.name || 'Anonymous'}</span>
                  <span>{item.type === 'kesan' ? 'Kesan' : 'Pesan'}</span>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
    </>
  );
}