import clsx from "clsx";
import Link from "next/link";

export default function Navbar(){
  return(
    <>
      <nav className={clsx(
        'bg-[#ffffff]/40',
        'shadow-xl',
        'h-[60px]',
        'flex justify-between fixed top-0',
        'z-40',
        'w-full',
        'space-x-96  ')}>
        <div className={clsx('flex items-center pl-6')}>
          <Link href=''>
            <img src="/logo-beeyou.svg" alt="Logo" />
          </Link>
        </div>
          
        <div className="flex justify-end items-center text-neutral-700 font-bold ">
          <a className="m-6" href="">Inicio</a>
          <a className="m-6" href="">Beneficios</a>
          <a className="m-6" href="">Iniciar sesion</a>
          <button className="m-6 p-2 rounded-lg border-4 border-rose-500 ">Unete a Bee you+!</button>  
        </div>
      </nav>  
    </>
  )
}