import React, { useState } from "react";
import clsx from "clsx";
import Input from "./Input";
import Button from "./Button";

const getAllValidations = (validation) => `$${validation.toFixed(2)}`;

export default function Notice2() {
  const values = [1, 1, 1, 1, 1];

  const [checkedState, setCheckedState] = useState(
    new values.length.fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const approvedValidation = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + values[index].validation;
        }
        return sum;
      },
      0
    );

    setTotal(approvedValidation);
  };

  return (
    <>
      <section className="w-[606px] h-[745px] border-2 shadow-xl rounded-[16px] ">
        <h2
          className={clsx(
            "h-[68px] pt-auto pt-5",
            "text-center text-[17px] font-bold font-montserrat text-blue-gray-900",
            "border-b-2 border-b-gray-200 shadow-xs"
          )}
        >
          Mi espacio friendly cumple con:
        </h2>
        <form
          className="p-7 text-justify text-[15px] text-blue-gray-700 font-montserrat"
          method="get"
          action=""
        >
          <label className="flex mb-4">
            <input
              className="mb-6"
              name="friendly"
              type="checkbox"
              value="false"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
            />
            <h1 className="pl-2">
              Mi negocio participa activamente en eventos de la comunidad
              LGBTIQ+
            </h1>
          </label>
          <label className="flex mb-4">
            <input
              className="mb-6"
              name="friendly"
              type="checkbox"
              value="false"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
            />
            <h1 className="pl-2">
              Mi negocio organiza eventos que incluyan a la comunidad LGBTIQ+
            </h1>
          </label>
          <label className="flex mb-4">
            <input
              className="mb-6"
              name="friendly"
              type="checkbox"
              value="false"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
            />
            <h1 className="pl-2">
              Mi negocio está abierto a personas que forman parte de la
              comunidad LGBTIQ+
            </h1>
          </label>
          <label className="flex mb-4">
            <input
              className="mb-6"
              name="friendly"
              type="checkbox"
              value="false"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
            />
            <h1 className="pl-2">
              Mi negocio está verificado en un organismo oficial como
              establecimiento LGBTIQ+ friendly
            </h1>
          </label>
          <label className="flex">
            <input
              className="mb-6"
              name="friendly"
              type="checkbox"
              value="false"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
            />
            <h1 className="pl-2">
              Mi negocio es incluyente y no discrimina a ningún miembro de la
              comunidad LGBTIQ+
            </h1>
          </label>
        </form>
        <section className="flex grid-rows-2 ml-7 ">
          <article>
            <Input
              label="Ingresa EL ID de certificacíón LGBTIQ+ Bussines"
              style="w-[263px]"
              type="text"
              placeholder="ID"
            ></Input>
          </article>
          <article>
            <Input
              label="Ingresa la fecha de expiración DEL CERTIFICADO"
              style="w-[263px]"
              type="date"
            ></Input>
          </article>
        </section>
        <form
          className="p-8 text-justify text-[10px] text-blue-gray-700 font-montserrat"
          method="get"
          action=""
        >
          <label className="flex mb-5">
            <input className="mb-[80px]" name="cbipeliculas" type="checkbox" />
            <h1 className="pl-2">
              Haz click aquí para verificar. Certifico que estas respuestas se
              basan en el compromiso ético y moral de mi negocio que promueve la
              igualdad así como un mayor respeto por los derechos de las
              personas LGBTIQ+ y sus identidades. Manifiesto de forma clara y
              contundente mi oposición contra quienes abusan de las personas del
              colectivo así como no permanecer impasible si sucede algún
              acontecimiento que atente contra ellas en mi establecimiento. Es
              un compromiso ético y personal con las personas LGBTIQ+ más allá
              del rédito económico que pueda obtener por la prestación de
              servicios de bee you.
            </h1>
          </label>
        </form>
        <article className="-mt-8 flex justify-around">
          <Button
            label="CANCELAR"
            isSubmit
            style={clsx(
              "border-2 border-purple-700 rounded-lg w-[250px] text-[#1F2124]"
            )}
          ></Button>
          <Button
            label="CONTINUAR"
            isSubmit
            style={clsx("lgbtiq-grad-bg rounded-lg w-[250px]")}
            className={getAllValidations(validation)}
          ></Button>
        </article>
      </section>
    </>
  );
}
