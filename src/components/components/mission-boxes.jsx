export default function MissionBox({ title, children, border }) {
  return (
    <div
      className={`
        p-4 pt-3 lg:p-5 lg:pt-4
        ${border === 'none' ? 'border-none' : 'border-r border-border'}
        text-text-pri min-w-64 snap-center md:snap-align-none xl:w-[20%]
        transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:bg-white/[0.018]
      `}
    >
      <h2 className="gradient-text">{title}</h2>
      <p className="text-[16px] text-text-sec text-justify mt-1">
        {children}
      </p>
    </div>
  );
}