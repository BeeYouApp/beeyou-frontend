import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { signUp } from "../services/auth";

const registerSchema = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required("Email requerido"),
    password: yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        .required("Contraseña requerida"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Confirmar contraseña es requerido"),
}).required()

export default function Register({ }) {
    const [messageError, setMessageError] = useState("");
    const [userType, setUserType] = useState("user");
    const router = useRouter();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(registerSchema)
      });
      const onSubmit = data => submitRegister(data);

    const popupRegister = (data) => {
        //LOGICA DE ABRIR POPUP Y AL HACER CLICK EN BOTON EJECUTAR CODIGO DE ABAJO
        //El boton del popup debe tener:  onSubmit={(data) => submitRegister(data)}
    }

    const submitRegister = async (data) => {
        try {
            setMessageError("");
            const { email, password } = data
            const response = await signUp(email, password, userType)
            const dataJson = await response.json()

            if (response.status === 200) {
                localStorage.setItem("token", dataJson.token);
                const userType = dataJson.user.role;
                localStorage.setItem("user", Buffer(JSON.stringify(dataJson.user)).toString("base64"));
                if(userType === "user") router.push(`/user/profile-configuration`)
                else if(userType === "company") router.push(`/company/profile-configuration`)
                return
            }
            setMessageError("Ya existe un usuario con este correo")
        } catch (error) {
            console.log('Error: ', error)
            setMessageError("Ops ocurrió un error")
        }
      };

    const handleClickSelectUserType = (type) => {
        setUserType(type)
    }

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
                onSubmit={handleSubmit(onSubmit)}
            >
                <section className={clsx("flex justify-between mx-8 w-[100%]")}>
                    <button
                        className={clsx(
                            "font-poppins font-medium leading-[20px] mt-6 pb-2",
                            `text-center text-[16px] text-blue-gray-400 w-[50%] ${userType === 'user' ? 'border-b-4 border-green-900' : 'border-b-2 border-blue-gray-100'}`
                        )}
                        onClick={() => handleClickSelectUserType("user")}
                        type="button"
                    >
                        Soy Usuario

                    </button>
                    <button
                        className={clsx(
                            "font-poppins font-medium leading-[20px] mt-6 pb-2",
                            `text-center text-[16px] text-blue-gray-400 w-[50%] ${userType === 'company' ? ' border-b-4 border-green-900' : 'border-b-2 border-blue-gray-100'}`
                        )}
                        onClick={() => handleClickSelectUserType('company')}
                        type="button"
                    >
                        Soy Negocio
                    </button>
                </section>
                {messageError && (<h3 className="text-red-900 font-bold">{messageError}</h3>)}
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
                        className={clsx(
                            "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
                            "rounded-lg pt-8 pb-4 px-2.5 text-gray-700",
                            "bg-[#F6F9FF] h-[46px]",
                            "hover:border-violet-700 border-2",
                            "focus:outline-none focus:shadow-outline",
                        )}
                        {...register("email")}
                    />
                    <p>{errors?.email?.message}</p>
                </div>
                <div className={clsx("w-[100%] mb-4 relative")}>
                    <div className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
                        <p className={clsx("font-poppins text-medium text-[12px] leading-[18px]",
                            "w-[100%] text-blue-gray-700")}>Contraseña</p>
                        <p className={clsx("ont-poppins text-normal text-[12px] text-end leading-[18px]",
                            "text-center text-blue-gray-400 w-[100%] underline underline-offset-3")}>Mostrar</p>
                    </div>
                    <input
                        className={clsx(
                            "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
                            "rounded-lg pt-8 pb-4 px-3 text-gray-700",
                            "bg-[#F6F9FF] hover:border-violet-700 border-2",
                            "focus:outline-none focus:shadow-outline"
                        )}
                        name="password"
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    <p>{errors?.password?.message}</p>
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
                        id="confirmPassword"
                        name="password"
                        type="password"
                        {...register("confirmPassword")}
                    />
                    <p>{errors?.confirmPassword?.message}</p>
                </div>
                <button
                    className={clsx("shadow-md lgbtiq-button cursor-pointer lgbtiq-grad-bg mt-8")}
                    type="submit"
                >
                    {
                        userType === "company"
                            ? "¡CONTINUAR!"
                            : "¡REGÍSTRATE!"
                    }
                </button>
            </form>

            <Image src={images.dividerIcon} className={clsx("mt-8 mb-6")} alt="Split Icon" />
            <p className={clsx(
                "text-center font-poppins font-normal leading-[18px] mb-4 w-[280px]",
                "text-blue-gray-400 text-[12px]"
            )}>
                Al crear tu cuenta de usuario en beeyou, aceptas los{" "}
                <span className="font-medium lgbtiq-grad-color">Términos y Condiciones</span> y el{" "}
                <span className="font-medium lgbtiq-grad-color">Aviso de privacidad</span> del servicio
            </p>
            <p className={clsx("text-center font-poppins font-medium leading-[18px] mb-6 lgbtiq-grad-color text-[12px]")}>
                <Link href="/login">
                    <span className={clsx("font-montserrat leading-[40px] text-yellow-900")}>
                        Inicia sesión en{" "}
                    </span>
                    bee you
                </Link>

            </p>
        </article>
    );
}
