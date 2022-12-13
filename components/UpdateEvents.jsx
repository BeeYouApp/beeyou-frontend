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

export default function EventsUpdate (){
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
    <section className={clsx("bg-white w-[680px] h-[846px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 absolute flex flex-col ")}>
      <article>
        <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Actualizar datos del evento</h1>
      </article>
      <section className={clsx("")}>
        <article className="inline-block">
          <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1',
          )}
          >
            NOMBRE DE TU EVENTO
          </label>
          <input
          htmlFor='name' 
          id='username'
          type='string'
          placeholder='Orgullo 2023'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
          </input>
        </article>
        <article className="inline-block m-4">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-2',
          )}
          >
          TIPO DE EVENTO / TEMÁTICA
          </label>
          <input
          htmlFor='name' 
          id='username'
          type='string'
          placeholder='Convivencia'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
          </input>
        </article>
      <div className="inline-flex">
        <div >
          <article className="w-[300px] h-[100px]">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-2',
            )}
            >
            DESCRIPCIÓN DE TU EVENTO
            </label>
            <input
            htmlFor='name'
            name='description' 
            id='username'
            type='string'
            placeholder='Un evento para unir a la comunidad'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[100px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
            )}>
            </input>
          </article>
        </div>    
          <div className="ml-4">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-2',
            )}
            >
            IMAGEN DEL EVENTO
            </label>
            <article className={clsx(
                "shadow mt-[8px] appearance-none border w-[300px] h-[100px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline")}>
            <article >
              <p className="rounded-lg py-2 px-3 text-blue-gray-500">Sube una imagen alusiva al evento</p>
              <div className={clsx("items-baseline w-[200px] h-[36px]")}>
                  <ButtonPurple className="text-normal text-[12px] text-center text-white">CARGAR IMAGEN</ButtonPurple>
              </div>
              </article>
            </article>
          </div>
        </div>
      <article>
        <h2 className={clsx("mt-[30px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Actualizar horario del evento</h2>
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
            placeholder='17/01/2023'
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
          placeholder='18/01/2023'
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
          placeholder='13:00 pm'
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
          placeholder='23:00 pm'
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
      <article>
          <h2 className={clsx("mt-[20px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Costo del evento</h2>
        </article>
      <article className="inline-flex">
      <label className={clsx(
          'text-[14px] font-montserrat font-medium text-blue-gray-500',
          'block ml-8 mt-5',
          )}
          >
          Con costo
        </label>
      <input
          htmlFor='name'
          id='username'
          type='string'
          placeholder='$ 125.00 MXN'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[6px] appearance-none border w-[176px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700 ml-6",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
        </input>
        </article>
      <article>
      <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-2',
          )}
          >
          AFORO
        </label>
        <input
          htmlFor='name'
          id='username'
          type='string'
          placeholder='200 asistentes'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline"
          )}>
        </input>
      </article>
    </section>
    <article className={clsx("mt-3 flex justify-between")}>
        <h3 className="lgbtiq-grad-color font-bold mt-5 ml-7">
          CANCELAR
        </h3>
        <Button
          label='ACTUALIZAR EVENTO'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg max-lg:mt-[10px]"
          )}>
        </Button>
    </article>
  </section>
    )
}