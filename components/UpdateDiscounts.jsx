import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"
// import Input from "./Input"
import { ToastContainer, toast } from "react-toastify"
// import { register } from "../lib/api";
import Button from "./Button"

export default function UpdateDiscount (){
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
      <section className={clsx("bg-white w-[680px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 absolute flex flex-col ")}>
        <div>
          <article>
            <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-gray-600 max-lg:ml-[3px]")}>Actualizar descuento</h1>
          </article>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
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
            "rounded-lg py-2 px-2 text-blue-gray-50",
            "bg-blue-gray-50 hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow w-[616px] h-[132px] mt-5">
          <article className="">
            <div class="flex items-center">
              <input id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="green-checkbox" class="ml-2 rounded-lg py-2 px-3 text-gray-400">Rápido</label>
            </div>
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mb')}>
            PORCENTAJE DE DESCUENTO
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='number'
            placeholder='10 %'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[176px] h-[40px] pl-16",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
          <p className="rounded-lg py-2 px-3 text-gray-400 mt-16">% de descuento en</p>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-11')}>
            DESCRIPCIÓN DEL DESCUENTO/PROMOCIÓN
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='En todas las bebidas'
            message='error'
            register={register}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[250px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow w-[616px] h-[132px] mt-5">
          <article className=" ">
            <div class="flex items-center">
              <input id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="green-checkbox" class="ml-2 rounded-lg py-2 px-3 text-gray-400">Custom</label>
            </div>
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
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
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <div>
        <article>
          <h2 className={clsx("mt-[30px] text-[20px] font-montserrat text-blue-gray-600 max-lg:ml-[3px]")}>Actualizar vigencia del descuento</h2>
        </article>
        <div className="inline-block"> 
          <article >
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
            FECHA Y HORA DE INICIO
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='datetime-local'
            placeholder='17/01/2023'
            message='error'
            register={register}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <article className="m-4 inline-block">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-1')}>
          FECHA Y HORA DE TERMINO
          </label>
          <input
          htmlFor='name'
          id='username'
          type='datetime-local'
          placeholder='18/01/2023'
          message='error'
          register={register}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
          </input>
        </article>
      </div>
    
      <div className={clsx("mt-3 flex justify-between")}>
        <button className="lgbtiq-grad-color font-bold mt-5 ml-7">
          CANCELAR
        </button>
        <Button
          label='ACTUALIZAR DESCUENTO'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg max-lg:mt-[10px] ")}>
        </Button>
      </div>
    </section>
  </div>
)
}