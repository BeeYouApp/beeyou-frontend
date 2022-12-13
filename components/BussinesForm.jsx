import clsx from "clsx"
import React from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import Button from "./Button"
import dynamic from 'next/dynamic'
import Map from "./Map"

const DynamicComponent = dynamic(() =>
  import('../components/AuitofillMap'), {
  ssr: false,
}
)

export default function BussinesForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = async data => {
    { console.log(data) }
    const result = await register(data)
    console.log("result:", result)
    if (!result) {
      toast.error("ups hubo un error")
    }

  }
  return (
    <section className={clsx(
      "absolute flex flex-col",
      "rounded-[16px] border-2 border-blue-sky-50",
      "p-5 mr-10 max-lg:mr-[0px]",
      "shadow-xl",
      "w-[700px] max-lg:w-[340px]",
    )}>
      <article>
        <h1 className="mt-[13px] max-lg:mt-[20px] text-[20px] font-bold font-montserrat text-blue-gray-900 max-lg:ml-[3px]">Datos del negocio</h1>
      </article>
      <section className="max-lg:inline-block">

        <h3 className="mt-[15px] mb-[8px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]">Nombre comercial</h3>
        <section className="max-lg:inline-block flex grid-rows-2 justify-between">
          <article>
            <input
              htmlFor='name'
              label='NOMBRE COMERCIAL DE TU NEGOCIO'
              id='username'
              type='string'
              placeholder='Ingresa nombre de tu negocio*'
              message='error'
              register={register}
              className={clsx('shadow',
                'mt-[12px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                'leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2')}
            >
            </input>
          </article>
          <article>
            <input
              htmlFor='name'
              label='RFC'
              id='username'
              type='string'
              placeholder='Ingresa RFC*'
              message='error'
              register={register}
              className={clsx('shadow',
                'mt-[12px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                'leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2', 'inline-flex')}>
            </input>
          </article>
        </section>

        <section>
          <article className="flexgrid-rows-2">
            <h3 className="mt-[16px] mb-[10px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]">Persona Moral</h3>
            <input
              htmlFor='name'
              label='NOMBRE Y APELLIDO DEL REPRESENTANTE LEGAL DEL NEGOCIO'
              id='username'
              type='string'
              placeholder='ingresar dato*'
              message='error'
              register={register}
              className={clsx('shadow',
                'mt-[12px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                'leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2 w-[100%]')}>
            </input>
          </article>
        </section>

        <section className="max-lg:inline-block flex grid-rows-2 justify-between">
          <section>
            <article>
              <input
                htmlFor='name'
                label='GIRO DEL NEGOCIO'
                id='username'
                type='string'
                placeholder='Giro de tu negocio*'
                message='error'
                register={register}
                className={clsx('shadow',
                  'mt-[12px]',
                  'appearance-none',
                  'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                  'leading-tight focus:outline-none focus:shadow-outline',
                  'hover:border-violet-700 border-2 mb-2')}>
              </input>

              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-3',
              )}> DESCRIPCION DE TU NEGOCIO
              </label>
              <textarea className={clsx(
                'shadow w-full h-[100px]',
                'mt-[12px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2',
              )}></textarea>
            </article>
          </section>
          <section>
            <article>
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-2',)}> HORARIO DE SERVICIO
              </label>
              <div className="inline-flex">
                <input
                  htmlFor='name'
                  label=''
                  id='username'
                  type='time'
                  placeholder='Giro de tu negocio*'
                  message='error'
                  register={register}
                  className={clsx('shadow',
                    'mt-[12px]',
                    'appearance-none',
                    'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                    'leading-tight focus:outline-none focus:shadow-outline',
                    'hover:border-violet-700 border-2 mb-2 w-[139px]')}>
                </input>
                <h3 className="m-auto ml-1 text-[12px] font-montserrat font-bold text-blue-gray-900">A:</h3>
                <input
                  htmlFor='name'
                  label=''
                  id='username'
                  type='time'
                  placeholder='Giro de tu negocio*'
                  message='error'
                  register={register}
                  className={clsx('shadow',
                    'mt-[12px]',
                    'appearance-none',
                    'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700',
                    'leading-tight focus:outline-none focus:shadow-outline',
                    'hover:border-violet-700 border-2 mb-2 w-[139px]')}>
                </input>
              </div>
            </article>

            <article>
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-3 mb-4')}> DIAS DE SERVICIO
              </label>
              <form className="text-gray-700 font-montserrat" onSubmit={handleSubmit(console.log)}>
                <section className="flex justify-between">
                  <input {...register("checkbox")} type="checkbox" value="A" />Lunes
                  <input {...register("checkbox")} type="checkbox" value="B" />Martes
                  <input {...register("checkbox")} type="checkbox" value="C" />Miercoles
                </section>
                <section className="mt-1 flex justify-between">
                  <input {...register("checkbox")} type="checkbox" value="D" />Jueves
                  <input {...register("checkbox")} type="checkbox" value="E" />Viernes
                  <input {...register("checkbox")} type="checkbox" value="F" />Sabado
                </section>
                <section className="mt-1 flex justify-between">
                  <input {...register("checkbox")} type="checkbox" value="G" />Domingo
                  <input {...register("checkbox")} type="checkbox" value="G" />Todos los dias
                </section>
                {/* <input type="submit" /> */}
              </form>
            </article>
          </section>
        </section>

        <label className={clsx(
          'text-[12px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-3 mb-2',
        )}> DIRECCION DE TU NEGOCIO
        </label>
        <DynamicComponent></DynamicComponent>
      </section>

      <article className=" mt-16 inline-block m-auto">
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