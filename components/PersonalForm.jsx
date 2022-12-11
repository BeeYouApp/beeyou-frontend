import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"
import Input from "./Input"
import { ToastContainer, toast } from "react-toastify"
import Button from "./Button"

export default function(){
  const { register, handleSubmit } = useForm()
  const onSubmit = async data => {
  {console.log(data)}
  const result = await register(data)
  console.log("result:", result)
  if(!result ){
    toast.error("ups hubo un error")
  } 

}
  return(
    <section className={clsx("w-[680px] h-[362px] max-lg:w-[340px] max-lg:h-[560px] rounded-[16px] border-2 border-blue-sky-50 flex flex-col shadow-xl absolute p-5 mr-10 max-lg:mr-[0px]")}>
      <article>
        <h1 className={clsx("mt-[13px] max-lg:mt-[20px] text-[20px] font-bold font-montserrat text-blue-gray-900 ml-4  max-lg:ml-[3px]")}>Datos personales</h1>
        <h3 className={clsx("mt-[15px] mb-[8px] text-[16px] font-medium font-montserrat text-blue-gray-900 ml-4 max-lg:ml-[3px]")}>Bienvenido a Bee you!</h3>
      </article>
    <section className={clsx("inline-flex max-lg:inline-block")}>
      <article className={clsx("m-auto")}>
        <Input
          htmlFor='name' 
          label='NOMBRE'
          id='username'
          type='string'
          placeholder='Ingresa tu nombre*'
          message='error'
          register={register}
          style="">
        </Input>
        <Input
          htmlFor='name' 
          label='APELLIDO'
          id='username'
          type='string'
          placeholder='Ingresa tu apellido*'
          message='error'
          register={register}
          style="">
        </Input>
      </article>
      <article className="">
        <Input
          htmlFor='name' 
          label='FECHA'
          id='username'
          type='string'
          placeholder='DD/MM/AAAA*'
          message='error'
          register={register}
          style="">
        </Input>
        <Input
          htmlFor='name' 
          label='GENERO'
          id='username'
          type='string'
          placeholder='Ingresa tu género*'
          message='error'
          register={register}
          style="">
        </Input>
      </article>
    </section>
    <article className={clsx("mt-3 flex justify-end")}>
        <Button
          label='CONTINUAR'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px]"
          )}>
        </Button>
    </article>
  </section>
    )
}