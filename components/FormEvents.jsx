import clsx from "clsx";
import React from "react";
import ButtonPurple from "./ButtonPurple";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().trim().required("campo requerido"),
  date: yup.date().required("campo requerido"),
  topic: yup.string().trim().required("campo requerido"),
  timeStart: yup.date().required("campo requerido"),
  timeEnd: yup.date().required("campo requerido"),
  haveCost: yup.boolean().required("campo requerido"),
  cost: yup.number().required("campo requerido"),
  capacity: yup.number().required("campo requerido"),
  description: yup
    .string()
    .trim()
    .required("campo requerido")
    .min(10, "requerido minimo 10 caracteres")
    .max(300, "requerido maximo 300 caracteres"),
  images: yup.string().trim().required("campo requerido"),
  keyImages: yup.string().trim().required("campo requerido"),
});

export default function EventsModalBiz() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "w-[680px] h-[846px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 flex flex-col "
      )}
    >
      <article>
        <h1
          className={clsx(
            "mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]"
          )}
        >
          Datos del evento
        </h1>
      </article>
      <article>
        <article className="inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1"
            )}
          >
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
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <p className="text-red-400">{errors.name?.message}</p>
        </article>
        <article className="inline-block m-4">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2"
            )}
          >
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
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <p className="text-red-400">{errors.topic?.message}</p>
        </article>
        <div className="inline-flex">
          <div>
            <article className="w-[300px] h-[100px]">
              <label
                className={clsx(
                  "text-[10px] font-montserrat font-medium text-blue-gray-500",
                  "block ml-1 mt-2"
                )}
              >
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
                  "focus:outline-none focus:shadow-outline"
                )}
              ></input>
              <p className="text-red-400">{errors.description?.message}</p>
            </article>
          </div>
          <div className="ml-4">
            <label
              className={clsx(
                "text-[10px] font-montserrat font-medium text-blue-gray-500",
                "block ml-1 mt-2"
              )}
            >
              IMAGEN del evento
            </label>
            <article
              className={clsx(
                "shadow mt-[8px] appearance-none border w-[300px] h-[100px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline"
              )}
            >
              <article>
                <p className="rounded-lg py-2 px-3 text-gray-700">
                  Sube una imagen alusiva al evento
                </p>
                <div className={clsx("items-baseline w-[200px] h-[36px]")}>
                  <ButtonPurple className="text-normal text-[12px] text-center text-white">
                    CARGAR IMAGEN
                  </ButtonPurple>
                </div>
              </article>
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
                "block ml-1 mt-1"
              )}
            >
              FECHA DE INICIO
            </label>
            <input
              htmlFor="timeStart"
              id="username"
              placeholder="dd/mm/aaaa*"
              {...register("timeStart")}
              className={clsx(
                "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline"
              )}
            ></input>
            <p className="text-red-400">{errors.timeStart?.message}</p>
            <dateIcon />
          </article>
        </div>
        <article className="m-4 inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1"
            )}
          >
            FECHA DE FIN
          </label>
          <input
            id="username"
            placeholder="dd/mm/aaaa*"
            {...register("timeEnd")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <p className="text-red-400">{errors.timeEnd?.message}</p>
          <dateIcon></dateIcon>
        </article>
        <article className=" inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1"
            )}
          >
            HORA DE INICIO
          </label>
          <input
            id="username"
            placeholder="00:00 pm*"
            {...register("date")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <p className="text-red-400">{errors.date?.message}</p>
          <openClockIcon></openClockIcon>
        </article>
        <article className="m-4 inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1"
            )}
          >
            HORA DE FIN
          </label>
          <input
            htmlFor="date"
            id="username"
            type="string"
            placeholder="00:00 pm*"
            message="error"
            register={register}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <closeClockIcon></closeClockIcon>
        </article>
        <article>
          <h2
            className={clsx(
              "mt-[20px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px]"
            )}
          >
            Costo del evento
          </h2>
        </article>
        <article className="inline-flex">
          <label
            className={clsx(
              "text-[14px] font-montserrat font-medium text-blue-gray-500",
              "block ml-8 mt-5"
            )}
          >
            Con costo
          </label>
          <input
            id="username"
            placeholder="$ 00.00 MXN*"
            {...register("haveCost")}
            className={clsx(
              "shadow mt-[6px] appearance-none border w-[176px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700 ml-6",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
        </article>
        <article>
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2"
            )}
          >
            AFORO
          </label>
          <input
            id="username"
            placeholder="000 asistentes*"
            {...register("capacity")}
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
          ></input>
          <p className="text-red-400">{errors.capacity?.message}</p>
        </article>
      </article>
      <article className={clsx("mt-3 flex justify-between")}>
        <button
          type="submit"
          label="PUBLICAR EVENTO"
          style={clsx("lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px]")}
        ></button>
      </article>
    </form>
  );
}
