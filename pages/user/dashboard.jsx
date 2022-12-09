import React, { Children } from "react";
import Map from "../../components/Map";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button"
import Layaut from "../../components/LayoutDashboard";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() =>
  import('../../components/AuitofillMap'), {
    ssr: false,
  }
)


export default function Dashboard () {
  return(
    <>
      <Layaut
        children={
          <>
            <section className=" w-11/12 radaial-2 m-auto rounded-2xl ">
              <h1 className="text-4xl font-montserrat font-bold mb-10 mt-8">Friendly espacios</h1>
              <Map></Map>
              <DynamicComponent/>
            </section>
            <section className="w-11/12 m-auto mt-20 flex justify-between md:justify-around">
              <Button label="Cafeterias" style="bg-gray-700 w-96 rounded-full"></Button>
              <Button label="Restaurantes" style="bg-gray-700 w-96 rounded-full"></Button>
              <Button label="Bares" style="bg-gray-700 w-96 rounded-full"></Button>
              <Button label="Librerias" style="bg-gray-700 w-96 rounded-full"></Button>
              <Button label="Clubs nocturnos" style="bg-gray-700 w-96 rounded-full max-lg:hidden"></Button>
              <Button label="Descuentos" style="bg-gray-700 w-96 rounded-full max-lg:hidden"></Button>
            </section>
          </>  
          }>
      </Layaut>
    </>
  )
}