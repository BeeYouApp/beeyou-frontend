import clsx from "clsx";
import Input from "./Input";
import Button from "./Button";
import React, { useState, useEffect } from "react";

export default function Notice(){
  const [value, setValue] = useState(0)
  const [check, setCheck] = useState(false)
  const [checkTwo, setCheckTwo] = useState(false)
  const [checkThree, setCheckThree] = useState(false)
  const [checkFour, setCheckFour] = useState(false)
  const [checkFive, setCheckFive] = useState(false)

  useEffect(() => {
      console.log(value)
  }, [value]);

  return(
    <>
      <section className="w-[606px] h-[745px] border-2 shadow-xl rounded-[16px] ">
        <h2 className={clsx(
          "h-[68px] pt-auto pt-5",
          "text-center text-[17px] font-bold font-montserrat text-blue-gray-900",
          "border-b-2 border-b-gray-200 shadow-xs")}
          >Mi espacio friendly cumple con:</h2>
        <form className="p-7 text-justify text-[15px] text-blue-gray-700 font-montserrat" method="get" action="">
          <label className="flex mb-4">
            <input 
              className="mb-6" 
              name="friendly" 
              type="checkbox" 
              value={check}
              onChange={()=>{
                if (check === !true){
                  setCheck(true)
                  setValue(value + 1)
                  } else {
                    setCheck(false)
                    setValue(value - 1)
                  }
              }}/>
            <h1 className="pl-2">Mi negocio participa activamente en eventos de la comunidad LGBTIQ+</h1>
          </label>
          <label className="flex mb-4">
            <input 
              className="mb-6" 
              name="friendly" 
              type="checkbox" 
              value={checkTwo}
              onChange={()=>{
                if (checkTwo === !true){
                  setCheckTwo(true)
                  setValue(value + 1)
                  } else {
                    setCheckTwo(false)
                    setValue(value - 1)
                  }
              }}/>
            <h1 className="pl-2">Mi negocio organiza eventos que incluyan a la comunidad LGBTIQ+</h1>
          </label>
          <label className="flex mb-4">
            <input 
              className="mb-6" 
              name="friendly" 
              type="checkbox" 
              value={checkThree}
              onChange={()=>{
                if (checkThree === !true){
                  setCheckThree(true)
                  setValue(value + 1)
                  } else {
                    setCheckThree(false)
                    setValue(value - 1)
                  }
              }}/>
            <h1 className="pl-2">Mi negocio está abierto a personas que forman parte de la comunidad LGBTIQ+</h1>
          </label>
          <label className="flex mb-4">
            <input 
              className="mb-6" 
              name="friendly" 
              type="checkbox" 
              value={checkFour}
              onChange={()=>{
                if (checkFour === !true){
                  setCheckFour(true)
                  setValue(value + 1)
                  } else {
                    setCheckFour(false)
                    setValue(value - 1)
                  }
              }}/>
            <h1 className="pl-2">Mi negocio está verificado en un organismo oficial como establecimiento LGBTIQ+ friendly</h1>
          </label>
          <label className="flex">
            <input 
              className="mb-6" 
              name="friendly" 
              type="checkbox" 
              value={checkFive}
              onChange={()=>{
                if (checkFive === !true){
                  setCheckFive(true)
                  setValue(value + 1)
                  } else {
                    setCheckFive(false)
                    setValue(value - 1)
                  }
              }}/>
            <h1 className="pl-2">Mi negocio es incluyente y no discrimina a  ningún miembro de la comunidad LGBTIQ+</h1>
          </label>
        </form>
        <section className="flex grid-rows-2 ml-7 ">
        <article>
          <Input
            label="Ingresa EL ID de certificacíón LGBTIQ+ Bussines"
            style="w-[263px]"
            type="text"
            placeholder="ID">
          </Input>
        </article>
        <article>
          <Input
            label="Ingresa la fecha de expiración DEL CERTIFICADO"
            style="w-[263px]"
            type="date">
          </Input>
        </article>
        </section>
        <form className="p-8 text-justify text-[10px] text-blue-gray-700 font-montserrat" method="get" action="">
          <label className="flex mb-5">
            <input className="mb-[80px]" name="cbipeliculas" type="checkbox"/>
            <h1 className="pl-2">Haz click aquí para verificar. Certifico que estas respuestas se basan en el compromiso ético y moral de mi negocio que promueve la igualdad así como un mayor respeto por los derechos de las personas LGBTIQ+ y sus identidades. Manifiesto de forma clara y contundente mi oposición contra quienes abusan de las personas del colectivo así como no permanecer impasible si sucede algún acontecimiento que atente contra ellas en mi establecimiento. Es un compromiso ético y personal con las personas LGBTIQ+ más allá del rédito económico que pueda obtener por la prestación de servicios de bee you.</h1>
          </label>
        </form>
        <article className="-mt-8 flex justify-around">
          <Button
            label='CANCELAR'
            isSubmit
            style={clsx(
              "border-2 border-purple-700 rounded-lg w-[250px] text-[#1F2124]")}>
          </Button>
          <Button
            onClick={() => {
              setValue(value);
                  }}
            label='CONTINUAR'
            isSubmit
            style={clsx(
              "lgbtiq-grad-bg rounded-lg w-[250px]")}>
                
          </Button>
        </article>
      </section>
    </>
  )
} 