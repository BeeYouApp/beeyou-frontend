import clsx from "clsx"
import React, { useRef, useState, useCallback, useEffect } from "react"
import { AddressAutofill, AddressMinimap, useConfirmAddress, config } from '@mapbox/search-js-react'
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import Input from "./Input"
import dynamic from "next/dynamic"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { updateCompany } from "../services/company"

const companyFormSchema = yup.object({
  brandName: yup.string().required("Requerido"),
  rfc: yup.string().required("Requerido"),
  legalRepresentative: yup.string().required("Requerido"),
  type: yup.string().required("Requerido"),
  description: 
    yup
    .string()
    .required("Requerido")
    .min(10, "La descripción debe contener al menos 10 caracteres")
    .max(280, "La descripción debe contener al menos 280 caracteres"),
  // address: yup//   .string() //   .required("Requerido"),
  street: yup.string().required("Requerido"),
  city: yup.string().required("Requerido"),
  state: yup.string().required("Requerido"),
  postalCode: yup.string().required("Requerido"),
}).required();

const DynamicComponent = dynamic(() => import('./AutofillMap'), {
    ssr: false,
});

export default function BussinesForm() {
  const [messageError, setMessageError] = useState("")
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(companyFormSchema),
  });

  const onSubmit = (data) => submitBusinessForm(data);

  const submitBusinessForm = async (data) => {
    try {
      const coordinateToSave = {
        type: "Point",
        coordinates: newCoordinates
     }

  const result = await showConfirm();
  const fullAddress = `${data.street}, ${data.city}, ${data.state}, ${data.postalCode}`;

    setMessageError("");
      const user = JSON.parse(Buffer(localStorage.getItem("user"), "base64").toString("ascii"));
      const id = user._id
      const token = localStorage.getItem("token")
      const response = await updateCompany(id, data, token, coordinateToSave, fullAddress);
      const dataJson = await response.json()


        if (response.status === 200) {
          console.log(dataJson)
          localStorage.setItem("user", Buffer(JSON.stringify(dataJson.user)).toString("base64"));
          const userType = user.role
            if (userType === "company")
              router.push("/company/dashboard");
            return;
      }
      setMessageError("Ya existe un usuario con este correo");
        } catch (error) {
          console.log("Error: ", error);
          setMessageError("Ops ocurrió un error");
        }
      };
    
    // State for autofill map
    const [showFormExpanded, setShowFormExpanded] = useState(false);
    const [showMinimap, setShowMinimap] = useState(false);
    const [feature, setFeature] = useState();
    const [showValidationText, setShowValidationText] = useState(false);
    const [token, setToken] = useState('');

    const [newCoordinates, setNewCoordinates] = useState([]);

    useEffect(() => { //Mapbox
        const accessToken = "pk.eyJ1IjoiYWJ5YmxhY2ttb3V0aCIsImEiOiJjbGFodTBobmowODIwM3hvYmxva20zYWQ4In0.GWgmsYW9P5xUKzxDGliiVg";
        setToken(accessToken)
        config.accessToken = accessToken;
    }, [])

    const { formRef, showConfirm } = useConfirmAddress({
        minimap: true,
        skipConfirmModal: (feature) => {
            ['exact', 'high'].includes(feature.properties.match_code.confidence)
        }
    });

    const handleRetrieve = useCallback((res) => {
        const feature = res.features[0];
        setFeature(feature);
        setShowMinimap(true);
        setShowFormExpanded(true);
    }, [setFeature, setShowMinimap]);

    function handleSaveMarkerLocation(coordinate) {
        setNewCoordinates(coordinate)
        console.log(newCoordinates) 
    }

    function submitForm() {
        setShowValidationText(true)
        setTimeout(() => {
            resetForm()
        }, 2500)
    }

    function resetForm() {
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input) => (input.value = ''))
        setShowFormExpanded(false)
        setShowValidationText(false)
        setFeature(null)
    }

    const [brandName, setBrandName] = useState("");
    const [rfc, setRfc] = useState("");
    const [legalRepresentative, setLegalRepresentative] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {setHasMounted(true)}, []);
    if (!hasMounted) {
      return null;
    }
    if (typeof window !== "undefined") {
      return (
        <>
          <form
            ref={formRef}
            className={clsx("absolute flex flex-col rounded-[16px] border-2 border-blue-sky-50 p-5 mr-10 max-lg:mr-[0px] shadow-xl w-[700px] max-lg:w-[340px]")}
            onSubmit={handleSubmit(onSubmit)}>
          <article>
            <h1 className={clsx(
              "mt-[13px] max-lg:mt-[20px] text-[20px] font-bold font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}
              >Datos del negocio
            </h1>
          </article>
          <section className={clsx("max-lg:inline-block")}>
            <h3 className={clsx(
              "mt-[15px] mb-[8px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}
              >Nombre comercial
            </h3>
          <section className={clsx("max-lg:inline-block flex grid-rows-2 justify-between")}>
            <article>
              <Input
                label="NOMBRE COMERCIAL DE TU NEGOCIO"
                id="brandName"
                name="brandName"
                type="string"
                placeholder="Ingresa el nombre de tu negocio*"
                register={register("brandName")}
                defaultValue={brandName}>
              </Input>
              <p>{errors?.brandName?.message}</p>
            </article>
            <article>
              <Input
                label="RFC"
                id="rfc"
                name="rfc"
                type="string"
                placeholder="Ingresa RFC*"
                style="inline-flex"
                register={register("rfc")}
                defaultValue={rfc}>
              </Input>
              <p>{errors?.rfc?.message}</p>
            </article>
          </section>
          <section>
            <article className={clsx("flexgrid-rows-2")}>
              <h3 className={clsx(
                "mt-[16px] mb-[10px] text-[16px] font-medium font-montserrat text-blue-gray-900 max-lg:ml-[3px]")}
                >Persona Moral
              </h3>
              <Input
                label="NOMBRE Y APELLIDO DEL REPRESENTANTE LEGAL DEL NEGOCIO"
                id="legalRepresentative"
                name="legalRepresentative"
                type="string"
                placeholder="Ingresar datos*"
                style="w-[100%]"
                register={register("legalRepresentative")}
                defaultValue={legalRepresentative}>
              </Input>
              <p>{errors?.legalRepresentative?.message}</p>
            </article>
          </section>
          <section className={clsx("max-lg:inline-block flex grid-rows-2 justify-between")}>
            <section>
              <article>
                <Input
                  label="GIRO DEL NEGOCIO"
                  id="type"
                  name="type"
                  type="string"
                  placeholder="Giro de tu negocio*"
                  register={register("type")}
                  defaultValue={type}>
                </Input>
                <p>{errors?.type?.message}</p>
                <label className={clsx(
                  "text-[12px] font-montserrat font-medium text-blue-gray-500",
                  "block ml-1 mt-3")}>
                  {" "}DESCRIPCIÓN DE TU NEGOCIO
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="string"
                  className={clsx(
                    "shadow w-full h-[100px]",
                    "mt-[12px]",
                    "appearance-none",
                    "border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "hover:border-violet-700 border-2 mb-2")}
                  {...register("description")}
                  defaultValue={description}>
                </textarea>
                <p>{errors?.description?.message}</p>
              </article>
            </section>
          <section>
          <article>
            <label
              className={clsx(
                "text-[12px] font-montserrat font-medium text-blue-gray-500",
                "block ml-1 mt-2")}>
                {" "}HORARIO DE SERVICIO
            </label>
            <div className={clsx("inline-flex")}>
              <Input
                id="fromTimezone"
                name="fromTimezone"
                type="time"
                style="w-[139px]">  
              </Input>
              <h3
                className={clsx(
                "m-auto ml-1 text-[12px] font-montserrat font-bold text-blue-gray-900")}>A
              </h3>
              <Input
                id="toTimezone"
                name="toTimezone"
                type="time"
                style="w-[139px]">
              </Input>
            </div>
          </article>
          <article>
            <label
              className={clsx(
                "text-[12px] font-montserrat font-medium text-blue-gray-500",
                "block ml-1 mt-3 mb-4")}>
                DÍAS DE SERVICIO
            </label>
          <section className="flex justify-between">
            <input
              {...register("checkbox")}
              type="checkbox"
              value="A"/>Lunes
            <input
              {...register("checkbox")}
              type="checkbox"
              value="B"/>Martes
            <input
              {...register("checkbox")}
              type="checkbox"
              value="C"/>Miércoles
          </section>
          <section className="mt-1 flex justify-between">
            <input
              {...register("checkbox")}
              type="checkbox"
              value="D"/>Jueves
            <input
              {...register("checkbox")}
              type="checkbox"
              value="E"/> Viernes
            <input
              {...register("checkbox")}
                type="checkbox"
                value="F"/> Sábado
          </section>
          <section className="mt-1 flex justify-between">
            <input
              {...register("checkbox")}
                type="checkbox"
                value="G"/> Domingo
            <input
              {...register("checkbox")}
              type="checkbox"
              value="G"/> Todos los días
          </section>
        </article>
      </section>
    </section>
    <label
      id="address"
      name="address"
      type="string"
      className={clsx(
        "text-[12px] font-montserrat font-medium text-blue-gray-500",
        "block ml-1 mt-3 mb-2")}>
        {" "}DIRECCIÓN DE TU NEGOCIO
    </label>
    <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
      <input
        className={clsx(
          "shadow",
          "mt-[12px]",
          "appearance-none",
          "border w-[100%] h-[40px] rounded-lg py-2 px-3",
          "text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          "hover:border-violet-700 border-2 mb-2")}
        placeholder="Busca tu espacio"
        autoComplete="address-line1"
        id="mapbox-autofill"
        {...register("street")}
        defaultValue={street}/>
      <p>{errors?.street?.message}</p>
    </AddressAutofill>
      {!showFormExpanded &&
        <div
          id="manual-entry"
          className="hover:text-purple-900 hover:font-medium text-center cursor-pointer"
          onClick={() => setShowFormExpanded(true)}>Ingresa dirección manual
        </div>
      }
        <div className="secondary-inputs" style={{ display: showFormExpanded ? "block" : "none" }}>
          <label className={clsx(
            "text-[12px] font-montserrat font-medium text-blue-gray-500",
            "block ml-1 mt-1")}>Local/Edificio
          </label>
          <input className={clsx(
            "shadow",
            "mt-[10px]",
            "appearance-none",
            'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            "hover:border-violet-700 border-2 mb-2")}
            placeholder="Apartment, suite, unit, building, floor, etc."
            autoComplete="address-line2"
            {...register("local")}/>
          <label className={clsx(
            'text-[12px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>Ciudad
          </label>
          <input className={clsx(
            'shadow',
            'mt-[12px]',
            'appearance-none',
            'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-violet-700 border-2 mb-2')}
            placeholder="Ciudad"
            autoComplete="address-level2"
            {...register("city")}
            defaultValue={city}/>
          <p>{errors?.city?.message}</p>
          <label className={clsx(
            'text-[12px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>Estado / Región
          </label>
          <input
            className={clsx(
              "shadow mt-[10px] border-2 mb-2 rounded-lg py-2 px-3",
              "appearance-none focus:outline-none focus:shadow-outline",
              "w-[300px] h-[40px]  text-gray-700 leading-tight",
              "hover:border-violet-700 ")}
            placeholder="State / Región"
            autoComplete="address-level1"
            {...register("state")}
            defaultValue={state}/>
          <p>{errors?.state?.message}</p>
          <label className={clsx(
            "text-[12px] font-montserrat font-medium text-blue-gray-500",
            "block ml-1 mt-1")}>Código Postal 
          </label>
          <input
            className={clsx(
              "shadow border-2 mb-2 rounded-lg py-2 px-3 mt-[10px]",
              "appearance-none focus:outline-none focus:shadow-outline hover:border-violet-700",
              "border w-[300px] h-[40px]  text-gray-700 leading-tight")}
            placeholder="Código Postal"
            autoComplete="postal-code"
            {...register("postalCode")}
            defaultValue={postalCode}/>
          <p>{errors?.postalCode?.message}</p>
        </div>
        <div style={{ display: showFormExpanded ? "block" : "none" }}>
          {/* Visual confirmation map */}
          <div
            id="minimap-container"
            className="mt-2  w-[300px] h-[200px]">
            <AddressMinimap
              canAdjustMarker
              satelliteToggle
              feature={feature}
              show={showMinimap}
              onSaveMarkerLocation={handleSaveMarkerLocation} />
            {/* Form buttons */}
            {showFormExpanded &&
              <div className="flex justify-end w-[300px] h-[25px] mt-20">
                <button type="button" className={clsx("px-3 border border-slate-300 rounded-md",
                  "text-sm shadow-sm bg-white text-center ml-2")}
                  id="btn-reset" onClick={resetForm}>Reset
                </button>
              </div>
            }
          </div>
        </div>
      </section>
      <article className={clsx("mt-16 inline-block")}>
        <button
          className={clsx("shadow-md lgbtiq-button cursor-pointer lgbtiq-grad-bg mt-8")}
          type="submit">
          {"CONTINUAR"}
        </button>
      </article>
    </form>
    {/* Validation text */}
    {showValidationText &&
      <div id="validation-msg" className="block">Order successfully submitted.</div>
    }
  </>
);
  } else {
    router.push(`/login`);
  }
}
  