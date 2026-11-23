import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlurText from './blurtext';

const MESSAGE_DURATION = 16000;

export default function ImmersiveView({ allEntries }) {
  const location = useLocation();
  const [isImmersive, setIsImmersive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const entryCount = allEntries?.length ?? 0;

  useEffect(() => {
    if(location.hash == "#immersiveview") setIsImmersive(true);
    else setIsImmersive(false)
  }, [location.hash]);

  useEffect(() => {
    if (!isImmersive || entryCount === 0) return;

    const timeoutId = setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % entryCount);
    }, MESSAGE_DURATION);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, entryCount, isImmersive]);

  function showNextEntry() {
    if (!isImmersive || entryCount === 0) return;
    setCurrentIndex((index) => (index + 1) % entryCount);
  }

  const currentEntry = entryCount > 0
    ? allEntries[currentIndex % entryCount]
    : null;
  const entryKey = currentEntry?.id ?? currentIndex;
  const name = currentEntry?.name || 'Anonymous';
  const type = currentEntry?.type === 'kesan' ? 'Kesan' : currentEntry?.type === 'pesan' ? 'Pesan' : '';

  return (
    <main onClick={showNextEntry} className={`w-full h-full fixed transition-all duration-600 ease-in-out flex items-center justify-center ${isImmersive ? 'backdrop-blur-xl bg-black/40 opacity-100 pointer-events-auto' : 'backdrop-blur-none bg-transparent opacity-0 pointer-events-none'}`}>
      <div className='w-full max-w-180 flex flex-col gap-4'>
        <BlurText
          key={`${entryKey}-${isImmersive}-${currentEntry?.message ?? ''}`}
          text={currentEntry?.message ?? ''}
          effect="blur"
          animateBy="words"
          direction="bottom"
          staggerFrom="center"
          trigger="load"
          delay={40}
          stepDuration={0.3}
          blur={10}
          distance={50}
          loop={false}
          focusOnHover={false}
          className="text-3xl font-semibold"
        />
        <div className='w-full h-0.5 rounded-full bg-border' />
        <div className='w-full flex justify-between'>
          <BlurText
            key={`${entryKey}-${isImmersive}-${name}`}
            text={name}
            effect="blur"
            animateBy="letters"
            direction="bottom"
            staggerFrom="center"
            trigger="load"
            delay={20}
            stepDuration={0.35}
            blur={10}
            distance={50}
            loop={false}
            focusOnHover={false}
            className="text-2xl font-semibold text-text-pri"
          />
          <BlurText
            key={`${entryKey}-${isImmersive}-${type}`}
            text={type}
            effect="blur"
            animateBy="letters"
            direction="bottom"
            staggerFrom="start"
            trigger="load"
            delay={40}
            stepDuration={0.35}
            blur={10}
            distance={50}
            loop={false}
            focusOnHover={false}
            className="text-2xl font-medium text-text-sec"
          />
        </div>
      </div>
    </main>
  )
}

