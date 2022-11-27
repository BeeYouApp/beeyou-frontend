import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

export default function Footer() {
  return (
    <>
      <section className={clsx("w-full h-auto bg-gray-100")}>
        <section className={clsx("grid grid-cols-1")}>
          <section className={clsx("flex px-4 mt-12 mb-7")}>
            <h3
              className={clsx(
                "poppins text-blue-gray-800 text-base font-medium leading-6 mr-6 md:ml-2 lg:ml-8"
              )}
            >
              Síguenos
            </h3>
            <Image
              className={clsx("mr-6")}
              src={images.twitterIcon}
              alt="Twitter Icon"
            />
            <Image
              className={clsx("mr-6")}
              src={images.facebookIcon}
              alt="Facebook Icon"
            />
            <Image src={images.instagramIcon} alt="Instagram Icon" />
          </section>
          <hr className={clsx("mx-auto w-full h-px bg-blue-gray-100")} />
          <section
            className={clsx("grid md:grid-cols-3 lg:grid-cols-4 px-4 mt-10")}
          >
            <section className={clsx("mr-6 md:ml-2 lg:ml-8")}>
              <Image
                className={clsx("mb-8")}
                src={images.beeyouLogo}
                alt="Bee You Logo"
              />
            </section>
            <section>
              <h4
                className={clsx(
                  "poppins text-blue-gray-700 text-base font-medium leading-6 mb-6"
                )}
              >
                Contacto
              </h4>
              <ul>
                <ul className={clsx("flex")}>
                  <Image
                    className={clsx("w-5 h-5 mr-2")}
                    src={images.telephoneIcon}
                    alt="Telephone Icon"
                  />
                  <li className={clsx("text-blue-gray-600 text-sm mb-4")}>
                    (MEX) +52 998 882 2698
                  </li>
                </ul>
                <ul className={clsx("flex")}>
                  <Image
                    className={clsx("w-5 h-5 mr-2")}
                    src={images.emailIcon}
                    alt="Email Icon"
                  />
                  <li className={clsx("text-blue-gray-600 text-sm mb-8")}>
                    info@beeyou.com
                  </li>
                </ul>
              </ul>
            </section>
            <section className={clsx("md:text-right md:mr-8 lg:text-start")}>
              <h4
                className={clsx(
                  "poppins text-blue-gray-700 text-base font-medium leading-6 mb-6"
                )}
              >
                Navegación
              </h4>
              <ul>
                <li className={clsx("mb-4")}>
                  <Link className={clsx("text-blue-gray-600 text-sm")} href="">
                    Inicio
                  </Link>
                </li>
                <li className={clsx("mb-4")}>
                  <Link className={clsx("text-blue-gray-600 text-sm")} href="">
                    Beneficios
                  </Link>{" "}
                </li>
                <li className={clsx("mb-8")}>
                  <Link className={clsx("text-blue-gray-600 text-sm")} href="">
                    Iniciar sesión
                  </Link>{" "}
                </li>
              </ul>
            </section>
            <section>
              <h4
                className={clsx(
                  "poppins text-blue-gray-700 text-base font-medium leading-6"
                )}
              >
                ¡Únete a Bee you!
              </h4>
              <button
                className={clsx("lgbtiq-button-two lgbtiq-grad-bg mb-10")}
              >
                ¡REGÍSTRATE!
              </button>
            </section>
          </section>
          <hr className={clsx("mx-auto w-full h-px bg-blue-gray-100")} />
          <section
            className={clsx(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 py-10"
            )}
          >
            <section>
              <h3
                className={clsx(
                  "text-blue-gray-600 text-sm mb-4 mr-6 md:ml-2 lg:ml-8"
                )}
              >
                Copyright © Beeyou 2022. Todos los derechos reservados.
              </h3>
            </section>
            <section
              className={clsx(
                "grid grid-cols-1 md:grid-cols-2 md:text-right lg:grid-cols-2"
              )}
            >
              <h3 className={clsx("text-blue-gray-600 text-sm mb-4")}>
                Aviso de Privacidad
              </h3>
              <h3
                className={clsx("text-blue-gray-600 text-sm md:mr-4 lg:mr-14")}
              >
                Términos y Condiciones
              </h3>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
