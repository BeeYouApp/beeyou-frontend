import clsx from "clsx";
import React from "react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Button from "../components/Button"
export default function Dashboard () {
  return(
    <>
      <nav className="h-[60px] w-full  gap-4">
        <Navbar/>
      </nav>
      <div className="grid grid-flow-col grid-cols-6 h-screen">
        <div className="bg-pink-100 row-span-6">Aqui va el aside</div>
        <div className="col-span-5 row-span-3 ">
          <h1 className="ml-20 mb-5 mt-5 text-4xl font-montserrat">Friendly espacios</h1>
          <div className=" w-11/12 bg h-5/6 radaial-2 m-auto rounded-2xl">
          <Map/>
          </div>
        </div>
        <div className=" col-span-5 flex justify-around	">
          <div>
            <Button 
              label="cafeterias"
              style="bg-blue-gray-500">
            </Button>
          </div>
          <div>
            <Button
              label="restaurantes"
              style="bg-blue-gray-500 w-96">
            </Button>
          </div>
          <div className="max-lg:hidden">
          <Button
              label="bares"
              style="bg-blue-gray-500">
            </Button>
          </div>
          <div>
          <Button
              label="librerias"
              style="bg-blue-gray-500">
            </Button>
          </div>
          <div className="max-lg:hidden">
          <Button
              label="club nocturno"
              style="bg-blue-gray-500">
            </Button>
          </div>
          <div className="max-lg:hidden">
          <Button
              label="club nocturno"
              style="bg-blue-gray-600">
            </Button>
          </div>        
        </div>
        <div className="bg-red-600 col-span-5 row-span-2">Aqui van las cards</div>
      </div>
    </>
  )
}