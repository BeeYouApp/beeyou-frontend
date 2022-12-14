import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"
// import Input from "./Input"
import { ToastContainer, toast } from "react-toastify"
import ButtonPurple from "./ButtonPurple"
// import { register } from "../lib/api";
import Button from "./Button"
import dateIcon from "../public/assets/dashboard/icon-date-gray-dark.svg";
import closeClockIcon from "../public/assets/dashboard/icon-clock-close-gray-dark.svg";
import openClockIcon from "../public/assets/dashboard/icon-clock-open-gray-dark.svg";

export default function CreateDiscount (){
  const {register,handleSubmit} = useForm()
  const onSubmit = async data => {
  {console.log(data)}
  const result = await register(data)
  console.log("result:", result)
  if(!result ){
    toast.error("ups hubo un error")
  } 
}
  return(
    <div>
      <section className={clsx("bg-white w-[680px] h-[812px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 absolute flex flex-col ")}>
        <div>
          <article>
<<<<<<< HEAD
            <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-600 max-lg:ml-[3px]")}>Crea un descuento</h1>
=======
            <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Crea un descuento</h1>
>>>>>>> abc22717feff6e0e4f28d2eaa14db321f422cf87
          </article>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1',
            )}
            >
            EJEMPLO
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='10% de descuento en todas las bebidas'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-blue-gray-50",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
            )}>
            </input>
          </article>
        </div>
        <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow mt[8px] w-[616px] h-[132px] mt-5">
          <article className=" ">
          <p className="rounded-lg py-2 px-3 text-gray-400">Rápido</p>
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1',
            )}
            >
            PORCENTAJE DE DESCUENTO
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='00 %'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[176px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
            )}>
            </input>
          </article>
          <p className="rounded-lg py-2 px-3 text-gray-400 mt-16">de descuento en</p>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-11',
            )}
            >
            DESCRIPCIÓN DEL DESCUENTO/PROMOCIÓN
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='Escribe una breve descripción'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[250px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
            )}>
            </input>
          </article>
        </div>
        <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow mt[8px] w-[616px] h-[132px] mt-5">
          <article className=" ">
            <p className="rounded-lg py-2 px-3 text-gray-400">Custom</p>
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1',
            )}
            >
            DESCRIPCIÓN DEL DESCUENTO/PROMOCIÓN
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='Escribe una breve descripción'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[584px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
            )}>
            </input>
          </article>
        </div>
        <div>
        <article>
          <h2 className={clsx("mt-[30px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Vigencia del descuento</h2>
        </article>
        <div className="inline-block"> 
          <article >
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1',
            )}
            >
            FECHA DE INICIO
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='dd/mm/aaaa'
            message='error'
            register={register}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}>
            </input>
            <dateIcon/>
          </article>
        </div>
        <article className="m-4 inline-block">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-1',
          )}
          >
          FECHA DE FIN
          </label>
          <input
          htmlFor='name'
          id='username'
          type='string'
          placeholder='dd/mm/aaaa'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
          </input>
          <dateIcon></dateIcon>
        </article>
        <article className=" inline-block">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-1',
          )}
          >
          HORA DE INICIO
          </label>
          <input
          htmlFor='name' 
          id='username'
          type='string'
          placeholder='00:00 pm'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
          </input>
          <openClockIcon></openClockIcon>
        </article>
        <article className="m-4 inline-block">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-1',
          )}
          >
          HORA DE FIN
          </label>
          <input
          htmlFor='name' 
          id='username'
          type='string'
          placeholder='00:00 pm'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
          </input>
          <closeClockIcon></closeClockIcon>
        </article>
      </div>
    
      <div className={clsx("mt-3 flex justify-between")}>
        <h3 className="lgbtiq-grad-color font-bold mt-5 ml-7">
          CANCELAR
        </h3>
        <Button
          label='PUBLICAR DESCUENTO'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg max-lg:mt-[10px]"
          )}>
        </Button>
      </div>
    </section>
  </div>
)
}