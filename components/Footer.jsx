import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

export default function Footer() {
  return (
    <>
      <section className="container w-full h-auto bg-gray-100">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <section>
            <h3 className="poppins text-blue-gray-800 text-base font-medium leading-6">
              Síguenos
            </h3>
            <Image src={images.twitter} alt="Twitter Icon" />
            <Image src={images.facebook} alt="Facebook Icon" />
            <Image src={images.instagram} alt="Instagram Icon" />
          </section>
          <section>
            <Image src={images.logo} alt="Bee You Logo" />
            <h4 className="poppins text-blue-gray-700 text-base font-medium leading-6">
              Contacto
            </h4>
            <ul>
              <Image src={images.telephone} alt="Telephone Icon" />
              <li className="text-blue-gray-600 text-sm">
                (MEX) +52 998 882 2698
              </li>
              <Image src={images.email} alt="Telephone Icon" />
              <li className="text-blue-gray-600 text-sm">info@beeyou.com</li>
            </ul>
            <h4 className="poppins text-blue-gray-700 text-base font-medium leading-6">
              Navegación
            </h4>
            <ul>
              <li>
                <Link className="text-blue-gray-600 text-sm" href="">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="text-blue-gray-600 text-sm" href="">
                  Beneficios
                </Link>{" "}
              </li>
              <li>
                <Link className="text-blue-gray-600 text-sm" href="">
                  Iniciar sesion
                </Link>{" "}
              </li>
            </ul>
            <h4 className="poppins text-blue-gray-700 text-base font-medium leading-6">
              ¡Únete a Bee you!
            </h4>
            <button>¡REGÍSTRATE!</button>
          </section>
          <h3 className="text-blue-gray-600 text-sm">
            Copyright © Beeyou 2022. Todos los derechos reservados
          </h3>
          <h3 className="text-blue-gray-600 text-sm">Aviso de Privacidad</h3>
          <h3 className="text-blue-gray-600 text-sm">Términos y Condiciones</h3>
        </section>
      </section>
    </>
  );
}
