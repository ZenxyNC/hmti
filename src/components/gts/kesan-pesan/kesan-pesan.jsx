import React, { useState } from 'react';
import InputBox from './component/inputbox';
import { uniqueNamesGenerator, animals } from 'unique-names-generator';

export default function KesanPesan() {
  const [username, setUsername] = useState(() => generateRandomName());

  function generateRandomName(isAnonymous = true) {
    const randomName = uniqueNamesGenerator({
      dictionaries: [animals],
      separator: ' ',
      style: 'capital'
    });

    if(isAnonymous) {
      return `Anonymous ${randomName}`;
    } else {
      return randomName;
    }
  }

  return (
    <>
      <nav className="
        w-dvw h-15 fixed bg-primary/60 backdrop-blur-md z-50 border-b border-border
        px-4
        md:px-20
        xl:px-30
        2xl:px-75
      ">
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-max h-full py-1 flex gap-1 items-center">
            <img src={`${import.meta.env.BASE_URL}hmti-logo.png`} className="h-full" />
            <span className="font-bold text-xl">HMTI SCU</span>
          </div>
        </div>
      </nav>
      
      <main className={`
        relative flex flex-col gap-25 overflow-x-hidden
        pt-19
        px-4
        md:px-20
        xl:px-30
        2xl:px-75
      `}>
        <header className='flex flex-col gap-1'>
          <span className='text-xl text-text-sec'>Kesan & Pesan</span>
          <h1 className='leading-12 overflow-hidden'>GOES TO SCHOOL<br/>HMTI SCU</h1>
        </header>

        <div className='flex flex-col gap-5 lg:flex-row'>
          <InputBox
            context="Kesan"
            username={username}
            setUsername={setUsername}
            generateRandomName={generateRandomName}
            placeholder="Gimana perasaan kamu selama acara hari ini?"
          />
          <InputBox
            context="Pesan"
            username={username}
            setUsername={setUsername}
            generateRandomName={generateRandomName}
            placeholder="Ada yang perlu kami tingkatin nggak?"
          />
        </div>
      </main>
    </>
  );
}