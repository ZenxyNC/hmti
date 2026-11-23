import { useState } from "react";
import { supabase } from "../../../../supabase-client";

export default function InputBox({ context, username, setUsername, generateRandomName, placeholder }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  function getUsername() {
    if(username.trim()) return username;
    else if (!username.trim()) return generateRandomName();
  }

  async function insertToSupabase({ name, message, type }) {
    try {
      const { error } = await supabase
        .from('kesanpesan')
        .insert({
          name, message, type
        });
      
      if(error) throw new Error(error);
      
      return {
        ok: true,
        data: null
      }
    } catch(err) {
      console.log(err)
      return {
        ok: false,
        data: err.message
      }
    }
  }

  async function handleSubmission(e) {
    e.preventDefault();

    const safeUsername = getUsername();
    
    if (!message.trim()) return;

    setIsLoading(true);

    const dataInsertion = await insertToSupabase({
      name: safeUsername,
      message: message,
      type: context.toLowerCase()
    });

    setIsLoading(false)

    if(dataInsertion.ok) {
      setMessage("");
    } else {
      console.log(dataInsertion)
    }

  }
  return (
    <div className='w-full max-w-150 h-max bg-secondary border border-border p-5 pt-4 rounded-outer flex flex-col gap-4'>
      <h2>{context}</h2>
      <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmission(e)}>
        <div className='flex flex-col gap-2'>
          <label className='text-text-sec text-sm'>Nama (opsional)</label>
          <input 
            type='text' 
            className='w-full h-10 bg-primary border border-border rounded-inner px-3 text-base font-normal'
            value={username}
            onInput={(e) => setUsername(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-text-sec text-sm'>{context}<span className='text-[#FF393D]'>*</span></label>
          <textarea
            className={`w-full h-30 bg-primary border rounded-inner p-3 pt-2 resize-none text-base font-normal border-border`}
            onInput={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={placeholder}
          />
        </div>
        <button className="w-full h-10 bg-accent rounded-inner mt-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
          {
            isLoading ? `Mengirim ${context}...`
            : `Kirim ${context}`
          }
        </button>
      </form>
      
    </div>
  );
}