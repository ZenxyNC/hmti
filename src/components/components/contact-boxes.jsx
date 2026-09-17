import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactBox({ image, name, role, instagram, whatsapp, className }) {
  return (
    <div className={`w-full h-max p-4 lg:p-5 flex flex-col gap-4 ${className}`}>
      <div className="flex gap-3 lg:gap-4 items-center">
        <img
          src={image}
          className="
            w-20 aspect-square object-cover rounded-inner border border-border
            transition-[border-color,transform] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            hover:border-accent/30
            hover:scale-[1.03]
            will-change-transform
          "
        />
        <div className="flex flex-col gap-0">
          <span className="gradient-text text-[20px] font-semibold">{name}</span>
          <span className="text-md text-text-sec">{role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
        {/* Instagram button */}
        <button
          className="
            cursor-pointer w-full h-13
            bg-primary/40 border border-border rounded-inner
            flex gap-3 items-center p-3
            font-semibold text-[16px]
            transition-[background-color,border-color,transform]
            duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            hover:bg-white/6 hover:border-white/25
            active:scale-[0.97] active:bg-white/4
            active:duration-80
            will-change-transform
          "
          style={{ WebkitTapHighlightColor: 'transparent' }}
          onClick={() => window.open(`https://instagram.com/${instagram}`, '_blank', 'noopener')}
        >
          <FaInstagram size={28} />
          @{instagram}
        </button>

        {/* WhatsApp button */}
        <button
          className="
            cursor-pointer w-full h-13
            bg-primary/40 border border-border rounded-inner
            flex gap-3 items-center p-3
            font-semibold text-[16px]
            transition-[background-color,border-color,transform]
            duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            hover:bg-white/6 hover:border-white/25
            active:scale-[0.97] active:bg-white/4
            active:duration-8
            will-change-transform
          "
          style={{ WebkitTapHighlightColor: 'transparent' }}
          onClick={() => window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`, '_blank', 'noopener')}
        >
          <FaWhatsapp size={28} />
          {whatsapp}
        </button>
      </div>
    </div>
  );
}