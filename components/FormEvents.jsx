import clsx from "clsx";
import React from "react";
import ButtonPurple from "./ButtonPurple";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";


const schema = yup.object().shape({
  name: yup.string().trim().required("campo requerido"),
  topic: yup.string().trim().required("campo requerido"),
  timeStart: yup.date().required("campo requerido"),
  timeEnd: yup.date().required("campo requerido"),
  // haveCost: yup.boolean().required("campo requerido").default(true),
  cost: yup.number().required("campo requerido"),
  capacity: yup.number().required("campo requerido"),
  description: yup
    .string()
    .trim()
    .required("campo requerido")
    .min(10, "requerido minimo 10 caracteres")
    .max(300, "requerido maximo 300 caracteres"),
  // images: yup.string().trim().required("campo requerido"),
});aceptar

export default function EventsModalBiz() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log('Errores en el form:')
  // console.log(errors)
  const onSubmit = (data) => {
    try {
      console.log('Creando evento...')
      console.log(data)

    } catch (error) {
      console.log('Error:', error)
    }
    
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "w-[680px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 flex flex-col ")}>

      <article>
        <h1 className={clsx(
            "mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>
            Datos del evento
        </h1>
      </article>

      <article>
        <article className="inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1")}>
              NOMBRE DE TU EVENTO
          </label>
          <input
            id="username"
            placeholder="Ingresar dato*"
            {...register("name")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400">{errors.name?.message}</p>
        </article>

        <article className="inline-block m-4">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2")}>
              TIPO DE EVENTO / TEMÁTICA
          </label>
          <input
            id="username"
            placeholder="Elige una temática*"
            {...register("topic")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400">{errors.topic?.message}</p>
        </article>

        <div className="inline-flex">
          <div>
            <article className="w-[300px] h-[100px]">
              <label
                className={clsx(
                  "text-[10px] font-montserrat font-medium text-blue-gray-500",
                  "block ml-1 mt-2")}>
                  DESCRIPCIÓN DE TU EVENTO
              </label>
              <input
                id="username"
                placeholder="Ingresa una descripción*"
                {...register("description")}
                className={clsx(
                  "shadow mt-[8px] appearance-none border w-[300px] h-[100px]",
                  "rounded-lg py-2 px-3 text-gray-700",
                  "bg-[#F6F9FF] hover:border-violet-700 border-2",
                  "focus:outline-none focus:shadow-outline")}/>
              <p className="text-red-400">{errors.description?.message}</p>
            </article>
          </div>
        </div>
        <article>
          <h2
            className={clsx(
              "mt-[30px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]"
            )}
          >
            Horario del evento
          </h2>
        </article>

        <div className="inline-block">
          <article>
            <label
              className={clsx(
                "text-[10px] font-montserrat font-medium text-blue-gray-500",
                "block ml-1 mt-1")}>
                FECHA DE INICIO
            </label>
            <input
              htmlFor="timeStart"
              id="username"
              type="datetime-local"
              placeholder="dd/mm/aaaa*"
              {...register("timeStart")}
              className={clsx(
                "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline")}/>
            <p className="text-red-400">{errors.timeStart?.message}</p>
          </article>
        </div>

        <article className="m-4 inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1")}>
              FECHA DE FIN
          </label>
          <input
            id="username"
            placeholder="dd/mm/aaaa*"
            type="datetime-local"
            {...register("timeEnd")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400">{errors.timeEnd?.message}</p>
        </article>


        <article>
          <h2 className={clsx(
              "mt-[20px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>
              Costo del evento
          </h2>
        </article>

        <article className="inline-flex">
          <label
            className={clsx(
              "text-[14px] font-montserrat font-medium text-blue-gray-500",
              "block ml-8 mt-5")}>
              Con costo
          </label>
          <input
            type="number"
            placeholder="$ 00.00 MXN*"
            {...register("cost")}
            className={clsx(
              "shadow mt-[6px] appearance-none border w-[176px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700 ml-6",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
        </article>


        <article>
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2")}>
            AFORO
          </label>
          <input
            id="username"
            type="number"
            placeholder="000 asistentes*"
            {...register("capacity")}
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400">{errors.capacity?.message}</p>
        </article>


      </article>






      <article className={clsx("mt-3 flex justify-between")}>

       {/* <ButtonPurple
          type="submit"
          label="PUBLICAR EVENTO"
          style={clsx("lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px]")}
        ></ButtonPurple> */}
       <button
          type="submit"
          className={clsx(" w-[250px] h-[45px] lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px] text-zinc-300")}
        >PUBLICAR EVENTO</button>

      </article>

    </form>
  );
}
