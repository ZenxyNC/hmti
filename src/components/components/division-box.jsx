import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

/* ─── Mobile accordion ─────────────────────────────────────────────────── */
export function DivisionBoxMobile({
  icon, name, sector, className,
  isExpanded: controlledExpanded, onToggle,
  border, description, responsibility,
}) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = controlledExpanded !== undefined;
  const isExpanded   = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (isControlled) onToggle?.();
    else setInternalExpanded(v => !v);
  };

  return (
    <div
      className={`
        ${border === 'none' ? 'border-none' : 'border-b border-border'}
        p-4 lg:p-5
        transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${isExpanded ? 'bg-white/2' : 'hover:bg-white/1.5'}
        ${className || ''}
      `}
    >
      {/* Header toggle */}
      <div
        className="flex justify-between items-center cursor-pointer w-full select-none"
        onClick={handleToggle}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="
              w-10 lg:w-12 aspect-square rounded-inner bg-primary border border-border
              flex items-center justify-center
              transition-[border-color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            "
            style={{ borderColor: isExpanded ? 'rgba(0,122,255,0.35)' : undefined }}
          >
            {icon}
          </div>
          <div className="flex flex-col gap-0">
            <h2 className="gradient-text">{name}</h2>
            {sector && <span className="text-xs text-text-sec">{sector}</span>}
          </div>
        </div>

        {/* Chevron rotates — no icon swap */}
        <span
          className="
            text-text-sec
            transition-[transform,color] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            will-change-transform
          "
          style={{
            transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)',
            color: isExpanded ? 'rgba(245,245,245,0.9)' : undefined,
          }}
        >
          <FaChevronDown size={16} />
        </span>
      </div>

      {/* Smoothly expanding accordion content */}
      <div
        className={`
          grid transition-[grid-template-rows,opacity,margin-top]
          duration-320 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}
        `}
      >
        <div className="overflow-hidden flex flex-col gap-3">
          <p className="text-[16px] text-text-pri text-justify">{description}</p>
          <div className="w-full h-px bg-border" />
          <ul className="text-sm font-normal text-text-sec">
            {responsibility.map((item, i) => (
              <li key={i} className="list-disc ml-4 mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


/* ─── Desktop card ──────────────────────────────────────────────────────── */
export function DivisionBoxDesktop({ icon, name, sector, className, description, responsibility }) {
  return (
    <div
      className={`
        w-full h-full ${className || ''} overflow-hidden p-5 flex flex-col gap-3
        transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:bg-white/2
        group
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-10 lg:w-12 aspect-square rounded-inner bg-primary border border-border
            flex items-center justify-center
            transition-[border-color,transform] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            group-hover:border-accent/30
            group-hover:scale-[1.04]
          "
        >
          {icon}
        </div>
        <div className="flex flex-col gap-0">
          <h2 className="gradient-text">{name}</h2>
          {sector && <span className="text-xs text-text-sec">{sector}</span>}
        </div>
      </div>
      <p className="text-justify">{description}</p>
      <div className="w-full h-px bg-border" />
      <ul className="text-sm font-normal text-text-sec">
        {responsibility.map((item, i) => (
          <li key={i} className="list-disc ml-4 mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}