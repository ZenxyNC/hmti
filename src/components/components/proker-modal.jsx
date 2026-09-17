import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ProkerModal({ isOpened, title, image, date, description }) {
  const navigate = useNavigate();
  
  return (
    <div className={`transition-all duration-400 ease-in-out w-full h-full bg-primary/40 fixed top-0 z-100 ${isOpened ? 'backdrop-blur-md opacity-100 pointer-events-auto' : 'backdrop-blur-none opacity-0 pointer-events-none'}`}>
      <div className={`transition-all duration-300 ease-in-out flex flex-col gap-4 ${isOpened ? 'scale-100 blur-0' : 'scale-80 blur-lg'} absolute inset-0 bg-primary w-[calc(100%-48px)] max-w-150 h-max min-h-100 mx-auto my-auto border border-border rounded-outer p-5 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold ">Program Kerja</span>
          <IoClose size={32} className="cursor-pointer text-text-sec hover:text-text-pri transition-colors duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" onClick={(e) => { navigate('#') }}/>
        </div>
        <img src={ isOpened && image ? image : '' } className="w-full aspect-video rounded-inner border-none object-cover object-center" alt="" />
        <div>
          <h1 className="text-2xl! font-semibold!">{title}</h1>
          <span className="text-lg text-text-sec">{date}</span>
        </div>
        <p className="text-base leading-7 text-justify">{description}</p>
      </div>
    </div>
  )
}