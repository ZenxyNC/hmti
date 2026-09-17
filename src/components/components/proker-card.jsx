import { Link } from "react-router-dom";

export default function ProkerCard({ image, title, date, index, total, setDataProkerIndex }) {
  const isLastInMdRow = index % 2 === 1;
  const isLastInLgRow = index % 3 === 2;
  const isLastMdRow   = index >= total - (total % 2 === 0 ? 2 : total % 2);
  const isLastLgRow   = index >= total - (total % 3 === 0 ? 3 : total % 3);

  const borderR = [
    isLastInMdRow ? 'md:border-r-0' : 'md:border-r md:border-border',
    isLastInLgRow ? 'lg:border-r-0' : 'lg:border-r lg:border-border',
  ].join(' ');

  const borderB = [
    index < total - 1 ? 'border-b border-border' : '',
    isLastMdRow ? 'md:border-b-0' : 'md:border-b md:border-border',
    isLastLgRow ? 'lg:border-b-0' : 'lg:border-b lg:border-border',
  ].join(' ');

  return (
    <Link
      to="#showcase-program-kerja"
      className={`
        w-full h-full p-4 lg:p-5 flex flex-col gap-4 justify-between 
        ${borderR} ${borderB}
        transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        hover:bg-white/2
        group
        cursor-pointer
      `}
      onClick={() => setDataProkerIndex(index)}
    >
      <div className="overflow-hidden rounded-inner border border-border">
        <img
          src={image}
          className="
            w-full object-cover aspect-video
            transition-transform duration-380 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            group-hover:scale-[1.025]
            will-change-transform
          "
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <h2>{title}</h2>
        <span className="text-sm text-text-sec shrink-0">{date}</span>
      </div>
    </Link>
  );
}