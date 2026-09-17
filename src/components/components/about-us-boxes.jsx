export default function AboutUsBox({ icon, title, children, border }) {
  return (
    <div
      className={`
        w-full h-max border-b border-border p-4 lg:p-5
        flex flex-col gap-2 lg:gap-3
        transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:bg-white/2
        ${border === 'none' ? 'border-none' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-10 lg:w-12 aspect-square rounded-inner bg-primary border border-border
            flex items-center justify-center
            transition-[border-color,box-shadow,transform]
            duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            group-hover:border-accent/30
          "
        >
          {icon}
        </div>
        <h2 className="gradient-text">{title}</h2>
      </div>
      <p className="text-[16px] text-text-sec font-normal">
        {children}
      </p>
    </div>
  );
}