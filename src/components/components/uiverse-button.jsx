import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      onClick={() => (window.location.href = '#program-kerja')}
      className="
        w-max relative cursor-pointer
        p-0.5 rounded-2xl
        bg-linear-to-t from-[#005bb5] to-[#70b5ff]
        opacity-90
        transition-[opacity,transform,box-shadow]
        duration-220
        ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:opacity-100
        hover:shadow-[0_0_20px_rgba(0,122,255,0.35)]
        active:scale-[0.97]
        active:opacity-85
        active:duration-80
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent/70
        focus-visible:ring-offset-2
        focus-visible:ring-offset-primary
        will-change-transform
      "
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span className="
        w-max h-full flex items-center gap-2 px-6 py-3
        bg-accent gradient-button text-white rounded-xl
        bg-linear-to-t from-[#0062cc] to-accent
        transition-[filter] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:brightness-110
      ">
        {children}
      </span>
    </button>
  );
};

export default Button;
