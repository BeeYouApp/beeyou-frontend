import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { updateVerification } from "../services/company";

export default function Notice(){
  const router = useRouter();
  const [messageError, setMessageError] = useState("");
  
  const [value, setValue] = useState(0)
  const [check, setCheck] = useState(false)
  const [checkTwo, setCheckTwo] = useState(false)
  const [checkThree, setCheckThree] = useState(false)
  const [checkFour, setCheckFour] = useState(false)
  const [checkFive, setCheckFive] = useState(false)
  const [checkNotice, setCheckNotice] = useState(false)
  const [validation, setValidation] = useState(false)

  const onSubmit = async (event) => {
    try {
      event.preventDefault()
      console.log("submitRegister")
      setMessageError("")

      const user = JSON.parse(Buffer(localStorage.getItem("user"), "base64").toString("ascii"));
      const id = user._id
      const token = localStorage.getItem("token")

      const data = {verificationLevel:value, isVerified:validation}
      console.log(data)
      const response = await updateVerification( id, token, value, validation )
      const dataJson = await response.json()
      console.log(dataJson)


      if (response.status === 200 && dataJson.user.isVerified === true) {
        router.push(`/company/profile-configuration?id=${response.user}&token=${response.token}`);
    }
    setMessageError(" ")

    } catch (error) {
      console.log('Error: ', error)
      setMessageError("Ops ocurrió un error")
    }
  } 


  useEffect(()=>{
    if(value >= 3 && checkNotice === true){
      setValidation(true)
      console.log("Usuario validado, puedes pasar")


    } else{
      console.log("No eres suficiente friendy par continuar")
    }
})

  return(
    <>
      <section className="w-[606px] h-[745px] border-2 shadow-xl rounded-[16px] ">
        <h2 className={clsx(
          "h-[68px] pt-auto pt-5",
          "text-center text-[17px] font-bold font-montserrat text-blue-gray-900",
          "border-b-2 border-b-gray-200 shadow-xs")}
          >Mi espacio friendly cumple con:</h2>
        <form 
          onSubmit={onSubmit}
          className="p-7 text-justify text-[15px] text-blue-gray-700 font-montserrat">
          <label className="flex mb-4">
            <input 
              className="mb-6" 
              name="check" 
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
              name="checkTwo" 
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
              name="checkThree" 
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
              name="checkFour" 
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
              name="checkFive" 
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
        <section className="flex grid-rows-2 ml-7 ">
        </section>
        <section className="p-8 text-justify text-[10px] text-blue-gray-700 font-montserrat">
          <label className="flex mb-5">
            <input 
              className="mb-[80px]" 
              name="notice" 
              type="checkbox"
              value ={checkNotice}
              onChange={()=>{
                if (checkNotice === !true){
                  setCheckNotice(true)
                  } else {
                    setCheckNotice(false)
                  }
              }}/>
            <h1 className="pl-2">Haz click aquí para verificar. Certifico que estas respuestas se basan en el compromiso ético y moral de mi negocio que promueve la igualdad así como un mayor respeto por los derechos de las personas LGBTIQ+ y sus identidades. Manifiesto de forma clara y contundente mi oposición contra quienes abusan de las personas del colectivo así como no permanecer impasible si sucede algún acontecimiento que atente contra ellas en mi establecimiento. Es un compromiso ético y personal con las personas LGBTIQ+ más allá del rédito económico que pueda obtener por la prestación de servicios de bee you.</h1>
          </label>
          <article className="-mt-8 flex justify-around">
          <button
            label='CANCELAR'
            className={clsx(
              "border-2 border-purple-700 rounded-lg w-[250px] text-[#1F2124]",
              "text-center font-bold font-montserrat",
              "w-[300px] h-[50px]",
              "hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80",
              "focus:outline-none focus:shadow-outline",
              )}>CANCELAR
          </button>
          <button
            label='CONTINUAR'
            type="submit"
            className={clsx(
              "lgbtiq-grad-bg rounded-lg w-[250px]",
              "py-2 px-4",
              "text-white text-center font-bold",
              "w-40",
              "hover:bg-sky-900",
              "focus:outline-none focus:shadow-outline",
              )}>CONTINUAR
          </button>
        </article>
        </section>
        </form>
      </section>
    </>
  )
} 