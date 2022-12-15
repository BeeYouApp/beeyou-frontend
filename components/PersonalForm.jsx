import clsx from "clsx";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUser } from "../services/user";

const personalFormSchema = yup
  .object({
    name: yup
    .string()
    .required("Requerido"),
    surname: yup
    .string()
    .required("Requerido"),
    birthDate: yup
    .date()
    .required("Requerido"),
    type: yup
    .string()
    .required("Requerido"),
    gender: yup
      .string()
  }).required();

export default function PersonalForm() {
  const [setMessageError] = useState("");
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(personalFormSchema) 
  });
  const onSubmit = (data) => submitPersonalForm(data);

  const submitPersonalForm = async (data) => {
    console.log(data);
    try {
      setMessageError("");
      const id = "639ba588cdddd19b1c4d43a2";
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWJhNTg4Y2RkZGQxOWIxYzRkNDNhMiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjcxMTQ0ODQwLCJleHAiOjE2NzEyMzEyNDB9.iBEB5tzzOeuy5NBAnMNCLQFzHTPGLRaVKTjyhIKzf1I";
      const response = await updateUser(id, data, token);

      if (response.status === 200) {
        if (userType === "user")
          router.push(
            `/user/dashboard?id=${response.user}&token=${response.token}`
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
      className={clsx("w-[680px] h-[362px] max-lg:w-[340px] max-lg:h-[560px] rounded-[16px] border-2 border-blue-sky-50 flex flex-col shadow-xl absolute p-5 mr-10 max-lg:mr-[0px]")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <article>
        <h1 className={clsx("mt-[13px] max-lg:mt-[20px] text-[20px] font-bold font-montserrat text-blue-gray-900 ml-4  max-lg:ml-[3px]")}>
          Datos personales
        </h1>
        <h3 className={clsx("mt-[15px] mb-[8px] text-[16px] font-medium font-montserrat text-blue-gray-900 ml-4 max-lg:ml-[3px]")}>
          Bienvenido a Bee you!
        </h3>
      </article>
      <section className={clsx("inline-flex max-lg:inline-block")}>
        <article className={clsx("m-auto")}>
          <Input
            label="NOMBRE"
            id="name"
            name="name"
            type="string"
            placeholder="Ingresa tu nombre*"
            register={register("name")}
          >
          </Input>
          <p>{errors?.name?.message}</p>
          <Input
            label="APELLIDO"
            id="surname"
            name="surname"
            type="string"
            placeholder="Ingresa tu apellido*"
            register={register("surname")}
          >
          </Input>
          <p>{errors?.surname?.message}</p>
        </article>
        <article>
          <Input
            label="FECHA DE NACIMIENTO"
            id="birthDate"
            name="birthDate"
            type="string"
            placeholder="DD/MM/AAAA*"
            register={register("birthDate")}
          >
          </Input>
          <p>{errors?.birthDate?.message}</p>
          <Input
            label="GÉNERO"
            id="gender"
            name="gender"
            type="string"
            placeholder="Ingresa tu género"
            register={register("gender")}
          >
          </Input>
          <p>{errors?.gender?.message}</p>
        </article>
      </section>
      <article className={clsx("mt-3 flex justify-end")}>
        <button
          className={clsx("shadow-md lgbtiq-button cursor-pointer lgbtiq-grad-bg mt-8")}
          type="submit">
          {"CONTINUAR"}
        </button>
      </article>
    </form>
  );
}
