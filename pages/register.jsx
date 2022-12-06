import React, { useState } from "react";
import Navbar from "../components/Navbar";
import clsx from "clsx";
import Link from "next/link";
import styles from "./register.module.scss";
export default function Register(props) {
  const [registerError, setRegisterError] = useState(false);
  const [register, setRegister] = useState(false);
  const submitRegister = (e) => {
    e.preventDefault();
    setRegisterError(false);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const biography = formData.get("biography");
    const citizenship = formData.get("citizenship");
    const createdAt = new Date().toDateString();
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://localhost:8080/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        biography,
        citizenship,
        createdAt,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        if (successResponse.success) {
          setRegister(successResponse.success);
        } else {
          setRegisterError(" ");
        }
      });
  };
  return (
    <>
      <Navbar />
      <main
        className={clsx("flex flex-col h-screen justify-center items-center")}
      >
        <h1
          className={
            "text-center font-montserrat font-bold lgbtiq-grad-color text-[32px]"
          }
        >
          <strong className={clsx("text-blue-gray-900")}>¡Bienvenid@ a </strong>
          bee you!
        </h1>
        <p className={clsx("text-blue-gray-900 text-[14px]")}>
          Encuenta tu espacio en Ciudad de México
        </p>
        <article
          className={clsx(
            "flex flex-col justify-center items-center mt-8",
            "w-[328px] border-1 border-blue-gray-100 rounded-[16px] shadow-md"
          )}
        >
          {registerError && (
            <h2 className={styles["register--title"]}>
              Ha ocurrido un error, verifique los campos
            </h2>
          )}
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
            onSubmit={(event) => submitRegister(event)}
          >
            <section
              className={clsx("flex justify-between mx-8 my-6 w-[100%]")}
            >
              <button className={clsx("text-center")}>Soy Usuario</button>
              <button className={clsx("text-center")}>Soy Negocio</button>
            </section>
            <input
              className={clsx(
                "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "mb-2 bg-[#F6F9FF]"
              )}
              name="correo"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className={clsx(
                "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "mb-2 bg-[#F6F9FF]"
              )}
              name="correo"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className={clsx(
                "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "mb-2 bg-[#F6F9FF]"
              )}
              name="correo"
              type="email"
              placeholder="Enter your email"
            />
          </form>
          <p className={clsx("")}>
            {/* Ya tienes cuenta, <Link to="/login">inicia sesión</Link> */}
          </p>
        </article>
      </main>
    </>
  );
}
