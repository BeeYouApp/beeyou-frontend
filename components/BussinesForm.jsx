import clsx from "clsx";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import dynamic from "next/dynamic";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateCompany } from "../services/company";

const companyFormSchema = yup.object({
    brandName: yup
        .string()
        .required("Requerido"),
    rfc: yup
        .string()
        .required("Requerido"),
    legalRepresentative: yup
        .string()
        .required("Requerido"),
    type: yup
        .string()
        .required("Requerido"),
    description: yup
        .string()
        .required("Requerido")
        .min(10, "La descripción debe contener al menos 10 caracteres")
        .max(280, "La descripción debe contener al menos 280 caracteres"),
    // address: yup
    //     .string()
    //     .required("Requerido"),
}).required();

const DynamicComponent = dynamic(() => import('./AutofillMap'), {
    ssr: false,
});

export default function BussinesForm() {
    const [messageError, setMessageError] = useState("");
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(companyFormSchema)
    });
    const onSubmit = (data) => submitBusinessForm(data);

    const submitBusinessForm = async (data) => {
        console.log(data);
        try {
            setMessageError("");
            const id = "63981d0604727e1a45c8181f"
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgxZDA2MDQ3MjdlMWE0NWM4MTgxZiIsInJvbGUiOiJDb21wYW55IiwiaWF0IjoxNjcxMDc1ODk5LCJleHAiOjE2NzExNjIyOTl9.wDQPhYbFNQ2WxWDTjnDPGvmYEHX35dmc2rG43iHOPvg"
            const response = await updateCompany(id, data, token);

            if (response.status === 200) {
                if (userType === "company")
                    router.push(
                        `/company/dashboard?id=${response.user}&token=${response.token}`
                    );
                return;
            }
            setMessageError("Ya existe un usuario con este correo");
        } catch (error) {
            console.log("Error: ", error);
            setMessageError("Ops ocurrió un error");
        }
    };

    return (
        <form
            className={clsx("absolute flex flex-col rounded-[16px] border-2 border-blue-sky-50 p-5 mr-10 max-lg:mr-[0px] shadow-xl w-[700px] max-lg:w-[340px]")}
            onSubmit={handleSubmit(onSubmit)}
        >
            <article>
                <h1 className={clsx(
                    "mt-[13px] max-lg:mt-[20px] text-[20px] font-bold font-montserrat text-blue-gray-900 max-lg:ml-[3px]"
                )}>Datos del negocio</h1>
            </article>
            <section className={clsx("max-lg:inline-block")}>
                <h3 className={clsx(
                    "mt-[15px] mb-[8px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]"
                )}>Nombre comercial</h3>
                <section className={clsx("max-lg:inline-block flex grid-rows-2 justify-between")}>
                    <article>
                        <Input
                            label="NOMBRE COMERCIAL DE TU NEGOCIO"
                            id="brandName"
                            name="brandName"
                            type="string"
                            placeholder="Ingresa el nombre de tu negocio*"
                            register={register("brandName")}
                        >
                        </Input>
                        <p>{errors?.brandName?.message}</p>
                    </article>
                    <article>
                        <Input
                            label="RFC"
                            id="rfc"
                            name="rfc"
                            type="string"
                            placeholder="Ingresa RFC*"
                            style="inline-flex"
                            register={register("rfc")}
                        >
                        </Input>
                        <p>{errors?.rfc?.message}</p>
                    </article>
                </section>

                <section>
                    <article className={clsx("flexgrid-rows-2")}>
                        <h3 className={clsx("mt-[16px] mb-[10px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}>
                            Persona Moral
                        </h3>
                        <Input
                            label="NOMBRE Y APELLIDO DEL REPRESENTANTE LEGAL DEL NEGOCIO"
                            id="legalRepresentative"
                            name="legalRepresentative"
                            type="string"
                            placeholder="Ingresar datos*"
                            style="w-[100%]"
                            register={register("legalRepresentative")}
                        >
                        </Input>
                        <p>{errors?.legalRepresentative?.message}</p>
                    </article>
                </section>

                <section className={clsx("max-lg:inline-block flex grid-rows-2 justify-between")}>
                    <section>
                        <article>
                            <Input
                                label="GIRO DEL NEGOCIO"
                                id="type"
                                name="type"
                                type="string"
                                placeholder="Giro de tu negocio*"
                                register={register("type")}
                            >
                            </Input>
                            <p>{errors?.type?.message}</p>

                            <label
                                className={clsx(
                                    "text-[12px] font-montserrat font-medium text-blue-gray-500",
                                    "block ml-1 mt-3"
                                )}
                            >
                                {" "}DESCRIPCIÓN DE TU NEGOCIO
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                type="string"
                                className={clsx(
                                    "shadow w-full h-[100px]",
                                    "mt-[12px]",
                                    "appearance-none",
                                    "border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    "hover:border-violet-700 border-2 mb-2"
                                )}
                                {...register("description")}
                            >
                            </textarea>
                            <p>{errors?.description?.message}</p>
                        </article>
                    </section>

                    <section>
                        <article>
                            <label
                                className={clsx(
                                    "text-[12px] font-montserrat font-medium text-blue-gray-500",
                                    "block ml-1 mt-2"
                                )}
                            >
                                {" "}HORARIO DE SERVICIO
                            </label>
                            <div className={clsx("inline-flex")}>
                                <Input
                                    id="fromTimezone"
                                    name="fromTimezone"
                                    type="time"
                                    style="w-[139px]"
                                ></Input>
                                <h3
                                    className={clsx(
                                        "m-auto ml-1 text-[12px] font-montserrat font-bold text-blue-gray-900"
                                    )}
                                >A</h3>
                                <Input
                                    id="toTimezone"
                                    name="toTimezone"
                                    type="time"
                                    style="w-[139px]"
                                ></Input>
                            </div>
                        </article>

                        <article>
                            <label
                                className={clsx(
                                    "text-[12px] font-montserrat font-medium text-blue-gray-500",
                                    "block ml-1 mt-3 mb-4"
                                )}
                            >
                                DÍAS DE SERVICIO
                            </label>
                            <section className="flex justify-between">
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="A"
                                /> Lunes
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="B"
                                /> Martes
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="C"
                                /> Miércoles
                            </section>
                            <section className="mt-1 flex justify-between">
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="D"
                                /> Jueves
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="E"
                                /> Viernes
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="F"
                                /> Sábado
                            </section>
                            <section className="mt-1 flex justify-between">
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="G"
                                /> Domingo
                                <input
                                    {...register("checkbox")}
                                    type="checkbox"
                                    value="G"
                                /> Todos los días
                            </section>
                        </article>
                    </section>
                </section>

                <label
                    id="address"
                    name="address"
                    type="string"
                    className={clsx(
                        "text-[12px] font-montserrat font-medium text-blue-gray-500",
                        "block ml-1 mt-3 mb-2")}>
                    {" "}DIRECCIÓN DE TU NEGOCIO
                </label>
                <DynamicComponent></DynamicComponent>
                <p>{errors?.address?.message}</p>
            </section>

            <article className={clsx("mt-16 inline-block")}>
                <button
                    className={clsx("shadow-md lgbtiq-button cursor-pointer lgbtiq-grad-bg mt-8")}
                    type="submit">
                    CONTINUAR
                </button>
            </article>
        </form>
    );
}
