import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUser } from "../services/user";

const personalFormSchema = yup.object({
  name: yup
    .string()
    .required("Requerido"),
  surname: yup
    .string()
    .required("Requerido"),
  birthDate: yup
    .date()
    .required("Requerido"),
  gender: yup
    .string()
}).required();

export default function PersonalForm() {
  const [messageError, setMessageError] = useState("");
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(personalFormSchema) 
  });
  const onSubmit = (data) => submitPersonalForm(data);

  const submitPersonalForm = async (data) => {
    try {
      setMessageError("");
      const user = JSON.parse(Buffer(localStorage.getItem("user"), "base64").toString("ascii"));
      const id = user._id;
      const token = localStorage.getItem("token");
      // const formattedDate = data.birthDate 
      // data.birthDate = formattedDate
      const response = await updateUser(id, data, token);
      const dataJson = await response.json()

      if (response.status === 200) {
        localStorage.setItem("user", Buffer(JSON.stringify(dataJson.user)).toString("base64"));
        const userType = user.role
        if (userType === "user")
          window.location.href = "/user/dashboard";
        return;
      }
      setMessageError("Ya existe un usuario con este correo");
    } catch (error) {
      console.log("Error: ", error);
      setMessageError("Ops ocurrió un error");
    }
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");

  useEffect(() => {
    const user = JSON.parse(Buffer(localStorage.getItem("user"), "base64").toString("ascii"));
    if (user) {
      setName(user.name);
      setSurname(user.surname);
      setGender(user.gender);
      const curr = new Date(user.birthDate);
      const date = curr.toISOString().substring(0,10);
      setBirthdate(date);
    }
  }, []);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {setHasMounted(true)}, []);
  if (!hasMounted) {
    return null;
  }
  if (typeof window !== "undefined") {

  return (
    <form
      className={clsx("absolute flex flex-col rounded-[16px] border-2 border-blue-sky-50 p-5 mr-10 max-lg:mr-[0px] shadow-xl w-[700px] max-lg:w-[340px]")}
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
            defaultValue={name}
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
            defaultValue={surname}
          >
          </Input>
          <p>{errors?.surname?.message}</p>
        </article>
        <article>
          <Input
            label="FECHA DE NACIMIENTO"
            id="birthDate"
            name="birthDate"
            type="date"
            placeholder="DD/MM/AAAA"
            register={register("birthDate")}
            defaultValue={birthdate}
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
            defaultValue={gender}
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
} else {
  router.push(`/login`);
}
}