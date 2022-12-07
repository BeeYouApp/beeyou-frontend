import clsx from "clsx"

export default function CardProfile(){
  return(
    <section className={clsx("w-[328px] h-[392px] rounded-[16px] border-2 border-blue-sky-50 flex flex-col shadow-xl absolute p-5 mr-10 max-lg:mr-[0px]")}>
      
      <form className={clsx("flex flex-col items-center")}>
        <div className={clsx("shrink-0")}>
          <img className={clsx("h-[144px] w-[144px] object-cover rounded-full")} 
          src="https://los40es00.epimg.net/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg" alt="Current profile photo" />
        </div>
        <label className={clsx("inline-block")}>
          <span className={clsx("sr-only")}>Choose profile photo</span>
          <input 
            type="file" 
            className={clsx("inline-block w-full text-sm text-slate-500 file:mr-auto file:py-2 file:px-auto file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100")}/>
       </label>
      </form>   
      <div className={clsx("p-4 w-full h-[60px] bg-blue-gray-50 mt-[32px] rounded-lg flex flex-col justify-center")}>
        <p className={clsx("text-[14px] font-bold font-montserrat text-blue-gray-900")}>No disponible</p>
        <p className={clsx("text-[12px] text-base font-poppins text-blue-gray-900")}>Miembro Bee you</p>
      </div>
      <div className={clsx("p-4 w-full h-[36px] bg-blue-gray-50 mt-[32px] rounded-lg flex flex-col justify-center")}>
        <p className={clsx("text-[12px] text-base font-poppins text-blue-gray-900")}>¡Usuario 100% bee you!</p>
      </div>
   </section>
    )
}