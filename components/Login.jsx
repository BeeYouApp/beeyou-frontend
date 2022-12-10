import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";

export default function Login({ }) {
  return (
    <article
      className={clsx(
        "flex flex-col justify-center items-center mt-8 mb-8",
        "w-[328px] h-[438px] md:w-[364px] border-1 border-blue-gray-100 rounded-[16px] shadow-md"
      )}
    >
      <div
        className={clsx(
          "border-b-2 border-blue-gray-100 font-montserrat font-bold",
          "text-[16px] text-blue-gray-900 text-center leading-[20px] w-[100%]"
        )}
      >
        <h2 className={clsx("font-montserrat font-bold text-[16px] my-6")}>
          Inicia Sesión
        </h2>
      </div>
      <form
        className={clsx("flex flex-col items-center mt-6")}
      // onSubmit={handleSubmit(onSubmit)}
      >
        <ToastContainer />
        <Input
          htmlFor="email"
          id="username2"
          type="email"
          placeholder="Ingresa tu correo"
          value={/\S+@\S+\.\S+/}
          message="error"
          style={clsx(
            "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "mb-4 bg-[#F6F9FF] h-[46px] m"
          )}
        />

        <div className={clsx("w-[100%] relative")}>
          <dlv className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
            <p className={clsx("font-poppins text-medium text-[12px] leading-[18px]",
              "w-[100%] text-blue-gray-700")}>Contraseña</p>
            <p className={clsx("ont-poppins text-normal text-[12px] text-end leading-[18px]",
              "text-center text-blue-gray-400 w-[100%] underline underline-offset-3")}>Mostrar</p>
          </dlv>
          <input
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
              "rounded-lg pt-7 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
            id="password"
            type="password"
          />
        </div>

        <button className={clsx("shadow-md lgbtiq-button lgbtiq-grad-bg mt-8")}>
          <Link href="/user/dasboard">Iniciar sesión</Link>
        </button>
      </form>

      <Image src={images.dividerIcon} className={clsx("mt-8 mb-6")} />
      <p
        className={clsx(
          "text-end font-poppins font-medium leading-[18px] mb-4 w-[280px]",
          "text-blue-gray-400 text-[12px] lgbtiq-grad-color"
        )}
      >
        ¿Has olvidado tu contraseña?
      </p>
      <p
        className={clsx(
          "text-center font-poppins font-medium leading-[18px] mb-6 lgbtiq-grad-color text-[12px]"
        )}
      >
        <span
          className={clsx("font-montserrat leading-[40px] text-yellow-900")}
        >
          Publica tu negocio en{" "}
        </span>
        bee you
      </p>
    </article>
  );
}
