import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import { register } from "../lib/api";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";

export default function RegisterCompany({ }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        {
            console.log(data);
        }
        const result = await register(data);
        console.log("result:", result);
        if (!result) {
            toast.error("ups hubo un error");
        }
    };
    return (
        <article
            className={clsx(
                "flex flex-col justify-center items-center mt-8 mb-8",
                "w-[328px] h-[608px] md:w-[364px] border-1 border-blue-gray-100 rounded-[16px] shadow-md"
            )}
        >
            <div
                className={clsx(
                    "border-b-2 border-blue-gray-100 font-montserrat font-bold",
                    "text-[16px] text-blue-gray-900 text-center leading-[20px] w-[100%]"
                )}
            >
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
                            "text-center text-[16px] text-blue-gray-400 w-[50%] border-b-2 border-blue-gray-100"
                        )}
                    >
                        <Link href="/user/register">Soy Usuario</Link>
                    </button>
                    <button
                        className={clsx(
                            "font-poppins font-medium leading-[20px] mt-6 pb-2",
                            "text-center text-[16px] text-blue-gray-400 w-[50%] border-b-4 border-green-900"
                        )}
                    >
                        <Link href="/company/register">Soy Negocio</Link>
                    </button>
                </section>

                <ToastContainer />
                <div className={clsx("w-[100%] mb-4 relative")}>
                    <dlv className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/3")}>
                        <p className={clsx("font-poppins text-medium text-[12px] leading-[18px]",
                            "w-[100%] text-blue-gray-700")}>Correo</p>
                    </dlv>
                    <Input
                        htmlFor="email"
                        id="username2"
                        type="email"
                        placeholder="example@example.com"
                        value={/\S+@\S+\.\S+/}
                        message="error"
                        register={register}
                        style={clsx(
                            "shadow mt-[12px] appearance-none border w-[300px] h-[56px]",
                            "rounded-lg pt-7 px-2.5 text-gray-700",
                            "bg-[#F6F9FF] h-[46px] "
                        )}
                    />
                </div>
                <div className={clsx("w-[100%] mb-4 relative")}>
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
                        {...register("password", {
                            required: true,
                            maxLength: 16,
                            minLength: 8,
                        })}
                    />
                </div>
                <div className={clsx("w-[100%] relative")}>
                    <dlv className={clsx("flex justify-between px-2.5 w-[100%] absolute top-1/4")}>
                        <p className={clsx("font-poppins text-medium text-[12px] leading-[18px]",
                            "w-[100%] text-blue-gray-700")}>Confirmar contraseña</p>
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
                        {...register("password", {
                            required: true,
                            maxLength: 16,
                            minLength: 8,
                        })}
                    />
                </div>
                <button className={clsx("shadow-md lgbtiq-button lgbtiq-grad-bg mt-8")}>
                    <Link href="/company/bussines-configuration">¡REGÍSTRATE!</Link>
                </button>
            </form>

            <Image src={images.dividerIcon} className={clsx("mt-8 mb-6")} />
            <p
                className={clsx(
                    "text-center font-poppins font-normal leading-[18px] mb-4 w-[280px]",
                    "text-blue-gray-400 text-[12px]"
                )}
            >
                Al crear tu cuenta de usuario en beeyou, aceptas los{" "}
                <span className="font-medium lgbtiq-grad-color">Términos y Condiciones</span> y el{" "}
                <span className="font-medium lgbtiq-grad-color">Aviso de privacidad</span> del servicio
            </p>
            <p
                className={clsx(
                    "text-center font-poppins font-medium leading-[18px] mb-6 lgbtiq-grad-color text-[12px]"
                )}
            >
                <span
                    className={clsx("font-montserrat leading-[40px] text-yellow-900")}
                >
                    Inicia sesión en{" "}
                </span>
                bee you
            </p>
        </article>
    );
}
