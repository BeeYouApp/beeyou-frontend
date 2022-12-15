import clsx from "clsx";
import Input from "./Input";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../lib/api";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function Register(props) {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = async (data) => {
  //   {console.log(data);}
  //   const result = await register(data);
  //   console.log("result:", result);
  //   if (!result) {
  //     toast.error("¡Ooops! Hubo un error");
  //   }
  
  const [registerError, setRegisterError] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useRouter();
  const submitRegister = (e) => {
    e.preventDefault();
    setRegisterError(false);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://beeyou-env.eba-xttf5uw4.us-east-1.elasticbeanstalk.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        if (successResponse.success) {
          // props.setToken(successResponse);
          setRegister(successResponse);
        }
      });
      setRegisterError(" ");
  };

  if (register) {
    return <Link href={navigate.push("/user/profile-configuration")}/>;
  }
// };

  return (
    <article
      className={clsx(
        "flex flex-col justify-center items-center mt-8 mb-8",
        "w-[328px] h-[608px] md:w-[364px] border-1 border-blue-gray-100 rounded-[16px] shadow-md")}>
      <div
        className={clsx(
          "border-b-2 border-blue-gray-100 font-montserrat font-bold",
          "text-[16px] text-blue-gray-900 text-center leading-[20px] w-[100%]")}>
        <h2 className={clsx("font-montserrat font-bold text-[16px] my-6")}>
          Regístrate
        </h2>
      </div>
      <form
        className={clsx("flex flex-col items-center")}
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={(event) => submitRegister(event)}
      >
        <section className={clsx("flex justify-between mx-8 w-[100%]")}>
          <button
            className={clsx(
              "font-poppins font-medium leading-[20px] mt-6 pb-2",
              "text-center text-[16px] text-blue-gray-400 w-[50%] border-b-4 border-green-900"
            )}>
            <Link href="/user/register">Soy Usuario</Link>
          </button>
          <button
            className={clsx(
              "font-poppins font-medium leading-[20px] mt-6 pb-2",
              "text-center text-[16px] text-blue-gray-400 w-[50%] border-b-2 border-blue-gray-100"
            )}>
            <Link href="/company/register">Soy Negocio</Link>
          </button>
        </section>
        {registerError && (<h3 className="text-red-900 font-bold">¡Ooops! Hubo un error</h3>)}
        <ToastContainer />
        <div className={clsx("w-[100%] mb-4 relative")}>
          <div className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/3")}>
            <p className={clsx(
              "font-poppins text-medium text-[12px] leading-[18px]",
              "w-[100%] text-blue-gray-700")}>Correo</p>
          </div>
          <input
            htmlFor="email"
            name="email"
            id="username2"
            type="email"
            placeholder="example@example.com"
            // value={/\S+@\S+\.\S+/}
            message="error"
            register={register}
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
              "rounded-lg pt-8 pb-4 px-2.5 text-gray-700",
              "bg-[#F6F9FF] h-[46px]",
              "hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline",
            )}
          />
        </div>
        <div className={clsx("w-[100%] mb-4 relative")}>
          <div className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
            <p className={clsx(
              "font-poppins text-medium text-[12px] leading-[18px]",
              "w-[100%] text-blue-gray-700")}>Contraseña</p>
            <p className={clsx(
              "font-poppins text-normal text-[12px] text-end leading-[18px]",
              "text-center text-blue-gray-400 w-[100%] underline underline-offset-3")}>Mostrar</p>
          </div>
          <input
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
              "rounded-lg pt-8 pb-4 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div className={clsx("w-[100%] relative")}>
          <div className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
            <p className={clsx(
              "font-poppins text-medium text-[12px] leading-[18px]",
              "w-[100%] text-blue-gray-700")}>Confirmar contraseña</p>
            <p className={clsx(
              "font-poppins text-normal text-[12px] text-end leading-[18px]",
              "text-center text-blue-gray-400 w-[100%] underline underline-offset-3")}>Mostrar</p>
          </div>
          <input
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
              "rounded-lg pt-8 pb-4 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline"
            )}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <input 
        className={clsx("shadow-md lgbtiq-button lgbtiq-grad-bg mt-8")}
        type="submit"
        value="¡REGÍSTRATE!"
        />
      </form>
      <Image src={images.dividerIcon} className={clsx("mt-8 mb-6")} />
      <p className={clsx(
          "text-center font-poppins font-normal leading-[18px] mb-4 w-[280px]",
          "text-blue-gray-400 text-[12px]"
        )}>
        Al crear tu cuenta de usuario en beeyou, aceptas los{" "}
        <span className="font-medium lgbtiq-grad-color">Términos y Condiciones</span> y el{" "}
        <span className="font-medium lgbtiq-grad-color">Aviso de privacidad</span> del servicio
      </p>
      <p className={clsx("text-center font-poppins font-medium leading-[18px] mb-6 lgbtiq-grad-color text-[12px]")}>
        <span className={clsx("font-montserrat leading-[40px] text-yellow-900")}>
          Inicia sesión en{" "}
        </span>
        bee you
      </p>
    </article>
  );
}
