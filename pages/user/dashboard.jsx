import React, { Children } from "react";
import Map from "../../components/Map";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Layaut from "../../components/LayoutDashboard";
import dynamic from "next/dynamic";
import CardCompany from "../../components/CardCompany";

// const DynamicComponent = dynamic(() => import("../../components/AutofillMap"), {
//   ssr: false,
// });

export default function Dashboard() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("token")) {
      return (
        <>
          <Layaut>
            <section className="w-11/12 radaial-2 m-auto rounded-2xl ">
              <h1 className="text-4xl font-montserrat font-bold mb-10 mt-8">
                Friendly espacios
              </h1>
              <Map></Map>
            </section>
            <section className="w-11/12 m-auto mt-20 flex justify-between md:justify-around mb-10 ">
              <Button
                label="Cafeterias"
                style="bg-gray-700 w-96 rounded-full"
              ></Button>
              <Button
                label="Restaurantes"
                style="bg-gray-700 w-96 rounded-full"
              ></Button>
              <Button
                label="Bares"
                style="bg-gray-700 w-96 rounded-full"
              ></Button>
              <Button
                label="Librerias"
                style="bg-gray-700 w-96 rounded-full"
              ></Button>
              <Button
                label="Clubs nocturnos"
                style="bg-gray-700 w-96 rounded-full max-lg:hidden"
              ></Button>
              <Button
                label="Descuentos"
                style="bg-gray-700 w-96 rounded-full max-lg:hidden"
              ></Button>
            </section>
            <CardCompany></CardCompany>
          </Layaut>
        </>
      );
    } else {
      router.push(`/login`);
    }
  }
}
