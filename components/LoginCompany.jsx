import clsx from "clsx";
import Input from "./Input";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function LoginCompany(props) {
  const [loginError, setLoginError] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useRouter();
  const submitLogin = (e) => {
    e.preventDefault();
    setLoginError(false);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://beeyou-env.eba-xttf5uw4.us-east-1.elasticbeanstalk.com/login/company",{
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
          props.setToken(successResponse);
          setLogin(successResponse);
        }
      });
      setLoginError(" ");
  };

    if (login) {
      return <Link href={navigate.push("/company/dashboard")}/>;
    }

    return (
        <article
            className={clsx(
                "flex flex-col justify-center items-center mt-8 mb-8",
                "w-[328px] h-[438px] md:w-[364px] border-1 border-blue-gray-100 rounded-[16px] shadow-md")}>
            <div
                className={clsx(
                    "border-b-2 border-blue-gray-100 font-montserrat font-bold",
                    "text-[16px] text-blue-gray-900 text-center leading-[20px] w-[100%]")}>
                <h2 className={clsx("font-montserrat font-bold text-[16px] my-6")}>
                    Inicia Sesión
                </h2>
            </div>
            <form
                className={clsx("flex flex-col items-center mt-6")}
                onSubmit={(event) => submitLogin(event)}
            >
                {loginError && (<h3 className="text-red-900 font-bold">Credenciales inválidas</h3>)}
                <ToastContainer />
                <input
                    htmlFor="email"
                    name="email"
                    id="username2"
                    type="email"
                    placeholder="Ingresa tu correo"
                    // value={/\S+@\S+\.\S+/}
                    message="error"
                    className={clsx(
                        "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
                        "rounded-lg py-2 px-3 text-gray-700",
                        "mb-4 bg-[#F6F9FF] h-[46px]",
                        "hover:border-violet-700 border-2",
                        "focus:outline-none focus:shadow-outline",
                    )}
                />
                <div className={clsx("w-[100%] relative")}>
                    <div className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
                        <p className={clsx(
                            "font-poppins text-medium text-[12px] leading-[18px]",
                            "w-[100%] text-blue-gray-700")}>
                           Contraseña
                        </p>
                        {/* <p className={clsx(
                            "ont-poppins text-normal text-[12px] text-end leading-[18px]",
                            "text-center text-blue-gray-400 w-[100%] underline underline-offset-3")}>
                            Mostrar
                        </p> */}
                    </div>
                    <input
                        className={clsx(
                            "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
                            "rounded-lg pt-7 px-3 text-gray-700",
                            "bg-[#F6F9FF] hover:border-violet-700 border-2",
                            "focus:outline-none focus:shadow-outline")}
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>
                <input 
                    className={clsx("shadow-md lgbtiq-button lgbtiq-grad-bg mt-8")}
                    type="submit"
                    value="Iniciar sesión"
                />
            </form>
            <Image src={images.dividerIcon} className={clsx("mt-8 mb-6")} />
            <p className={clsx(
                "text-end font-poppins font-medium leading-[18px] mb-4 w-[280px]",
                "text-blue-gray-400 text-[12px] lgbtiq-grad-color")}>
               ¿Has olvidado tu contraseña?
            </p>
            <p className={clsx("text-center font-poppins font-medium leading-[18px] mb-6 lgbtiq-grad-color text-[12px]")}>
                <span className={clsx("font-montserrat leading-[40px] text-yellow-900")}>
                    Publica tu negocio en{" "}
                </span>
                bee you
            </p>
        </article>
    );
}
