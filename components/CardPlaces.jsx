import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

export default function Events() {
  return (
    <>
      <article className="px-4 md:px-8 mt-24">
        <h3
          className={clsx(
            "font-montserrat font-bold text-blue-gray-900 text-[24px] leading-[30px]"
          )}
        >
          Tus eventos
        </h3>
        <section className="flex items-center mt-4 mb-5">
          <Image
            className={clsx("")}
            src={images.nearEventIcon}
            alt="Near Event Icon"
          />
          <h4
            className={clsx(
              "font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6"
            )}
          >
            Tus eventos cercanos
          </h4>
        </section>
        <section className="md:flex md:justify-evenly">
          <div className="flex justify-center">
            <section className="hidden md:flex md:items-center md:mr-[65px]">
              <Image
                className={clsx("")}
                src={images.leftArrow}
                alt="Left Arrow Icon"
              />
            </section>
            <div className="shadow-lg max-w-sm md:mr-5">
              <a href="#!">
                <Image
                  className={clsx(
                    "rounded-lg w-[328px] md:w-[215px] h-[257px] object-none"
                  )}
                  src={images.paradeFlag}
                  alt="Parade Flag Image"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="shadow-lg max-w-sm md:ml-5">
              <a href="#!">
                <Image
                  className={clsx(
                    "rounded-lg w-[328px] md:w-[215px] h-[257px] object-none"
                  )}
                  src={images.paradeFlag}
                  alt="Parade Flag Image"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="shadow-lg max-w-sm md:ml-5">
              <a href="#!">
                <Image
                  className={clsx(
                    "rounded-lg w-[328px] md:w-[215px] h-[257px] object-none"
                  )}
                  src={images.paradeFlag}
                  alt="Parade Flag Image"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="shadow-lg max-w-sm md:ml-5">
              <a href="#!">
                <Image
                  className={clsx(
                    "rounded-lg w-[328px] md:w-[215px] h-[257px] object-none"
                  )}
                  src={images.paradeFlag}
                  alt="Parade Flag Image"
                />
              </a>
            </div>
          </div>
          <section className="hidden md:flex md:items-center md:ml-[65px]">
            <Image
              className={clsx("")}
              src={images.rightArrow}
              alt="Right Arrow Icon"
            />
          </section>
        </section>
        <section className="md:hidden">
          <section className="flex justify-end mt-6">
            <Image
              className={clsx("")}
              src={images.leftArrow}
              alt="Left Arrow Icon"
            />
            <Image
              className={clsx("ml-10")}
              src={images.rightArrow}
              alt="Right Arrow Icon"
            />
          </section>
        </section>
        <section>
          <section className="flex items-center mt-10 mb-6">
            <Image src={images.allEventsIcon} alt="All Events Icon" />
            <h4
              className={clsx(
                "font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6"
              )}
            >
              Todos tus eventos
            </h4>
          </section>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 md:mb-[75px] inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-y-auto">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="text-[14px] font-medium text-blue-gray-600 pl-6 pr-32 py-4"
                        >
                          ORGANIZADOR
                        </th>
                        <th
                          scope="col"
                          className="text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                        >
                          EVENTO
                        </th>
                        <th
                          scope="col"
                          className="text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                        >
                          FECHA
                        </th>
                        <th
                          scope="col"
                          className="hidden lg:block text-[14px] font-medium text-blue-gray-600 px-6 py-4"
                        >
                          HORA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          <Image
                            className={clsx("w-16 h-12 mr-3")}
                            src={images.beeYouEvent}
                            alt="Near Event Icon"
                          />
                          BEE YOU APP
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          Orgullo 2023
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          16/12/2022
                        </td>
                        <td className="hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          07:00 pm
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          <Image
                            className={clsx("w-16 h-12 mr-3")}
                            src={images.beeYouEvent}
                            alt="Near Event Icon"
                          />
                          BEE YOU APP
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          Orgullo 2023
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          16/12/2022
                        </td>
                        <td className="hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          07:00 pm
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          <Image
                            className={clsx("w-16 h-12 mr-3")}
                            src={images.beeYouEvent}
                            alt="Near Event Icon"
                          />
                          BEE YOU APP
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          Orgullo 2023
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          16/12/2022
                        </td>
                        <td className="hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          07:00 pm
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="flex items-center text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          <Image
                            className={clsx("w-16 h-12 mr-3")}
                            src={images.beeYouEvent}
                            alt="Near Event Icon"
                          />
                          BEE YOU APP
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          Orgullo 2023
                        </td>
                        <td className="text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          16/12/2022
                        </td>
                        <td className="hidden lg:table-cell text-[14px] text-blue-gray-600 font-normal px-6 py-4 whitespace-nowrap">
                          07:00 pm
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
