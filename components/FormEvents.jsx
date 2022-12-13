
import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import ButtonPurple from "./ButtonPurple"
import Button from "./Button"
import { register } from "../lib/api"


export default function EventsModalBiz  ({ } ){
  return(
<section className={clsx("w-[680px] h-[846px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 flex flex-col ")}>
      <article>
        <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Datos del evento</h1>
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
          placeholder='Ingresar dato*'
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
          placeholder='Elige una temática*'
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
            placeholder='Ingresa una descripción*'
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
            DESCRIPCIÓN DE TU EVENTO
            </label>
            <article className={clsx(
                "shadow mt-[8px] appearance-none border w-[300px] h-[100px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline")}>
            <article >
              <p className="rounded-lg py-2 px-3 text-gray-700">Sube una imagen alusiva al evento</p>
              <div className={clsx("items-baseline w-[200px] h-[36px]")}>
                  <ButtonPurple className="text-normal text-[12px] text-center text-white">CARGAR IMAGEN</ButtonPurple>
              </div>
              </article>
            </article>
          </div>
        </div>
      <article>
        <h2 className={clsx("mt-[30px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>Horario del evento</h2>
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
            placeholder='dd/mm/aaaa*'
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
          placeholder='dd/mm/aaaa*'
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
          placeholder='00:00 pm*'
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
          placeholder='00:00 pm*'
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
          placeholder='$ 00.00 MXN*'
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
          placeholder='000 asistentes*'
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
        <h3 className="text-lgbtiq">
          CANCELAR
        </h3>
        <Button
          label='PUBLICAR EVENTO'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px]"
          )}>
        </Button>
    </article>
  </section>


    
    )
}