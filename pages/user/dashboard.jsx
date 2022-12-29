import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import Map from "../../components/Map";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Layout from "../../components/LayoutDashboard";
// import Feed from "../../components/FeedCompanies";
import dynamic from "next/dynamic";

const Feed = dynamic(() => import('../../components/FeedCompanies'), {
  ssr: false,
});


export default function Dashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true) }, []);
  if (!hasMounted) {
    return null;
  }
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      return (
        <Layout>
          <section className={clsx("w-12/12 lg:w-11/12 m-auto rounded-2xl")}>
            <section className={clsx("md:flex flex-row-reverse items-center justify-end mt-8 xl:-mt-4")}>
              <div className={clsx("bg-green-900 rounded-lg w-[88px] h-[24px]",
                "flex items-center justify-center")}>
                <p className={clsx("font-montserrat font-bold text-[#FFFFFF] text-[12px] text-center leading-4")}>
                  Cerca de ti
                </p>
              </div>

              <h1 className={clsx("text-[28px] leading-[36px] font-montserrat font-bold lg:mt-0 to-blue-gray-800 mr-2")}>
                Espacios friendly
              </h1>

            </section>
            <Map></Map>
          </section>
          <section className={clsx("w-11/12 m-auto mt-20 flex justify-between md:justify-around mb-10")}>
            {/* <Button
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
            </Button> */}
          </section>
          <Feed />
        </Layout>
      );
    } else {
      router.push(`/login`);
    }
  }
}
