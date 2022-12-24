import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Map from "../../components/Map";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Layout from "../../components/LayoutDashboard";
import CardCompany from "../../components/CardCompany";

export default function Dashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {setHasMounted(true)}, []);
  if (!hasMounted) {
    return null;
  }
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      return (
        <Layout>
          <section className={clsx("w-11/12 m-auto rounded-2xl")}>
            <section className={clsx("flex items-center mt-8 xl:-mt-4")}>
              <h1 className={clsx("text-[28px] leading-[36px] font-montserrat font-bold mb-10 lg:mt-0 to-blue-gray-800")}>
                Espacios friendly
              </h1>
              <p className={clsx("font-montserrat font-bold text-[#FFFFFF] text-[12px] leading-4 bg-green-900 rounded-lg ml-3 px-3 py-1 xl:-mt-10")}>
                Cerca de ti
              </p>
            </section>
            <Map></Map>
          </section>
          <section className={clsx("w-11/12 m-auto mt-20 flex justify-between md:justify-around mb-10")}>
            <Button
              label="Cafeterías"
              style="bg-gray-700 w-96 rounded-full">
            </Button>
            <Button
              label="Restaurantes"
              style="bg-gray-700 w-96 rounded-full">
            </Button>
            <Button
              label="Bares"
              style="bg-gray-700 w-96 rounded-full">
            </Button>
            <Button
              label="Librerías"
              style="bg-gray-700 w-96 rounded-full">
            </Button>
            <Button
              label="Clubs nocturnos"
              style="bg-gray-700 w-96 rounded-full max-lg:hidden">
            </Button>
            <Button
              label="Descuentos"
              style="bg-gray-700 w-96 rounded-full max-lg:hidden">
            </Button>
          </section>
          <CardCompany></CardCompany>
        </Layout>
      );
    } else {
      router.push(`/login`);
    }
  }
}
