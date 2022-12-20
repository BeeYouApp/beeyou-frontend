import React, { useState } from "react";

export default function DiscountsChart() {
  return(
    <>
      <table className="w-full text-center">
        <thead>
          <tr className="text-[13px] font-montserrat font-semibold text-blue-gray-800">
            <th className="border">DESCUENTO</th>
            <th className="border">FECHA Y HORA DE INICIO</th>
            <th className="border">FECHA Y HORA DE TERMINO</th>
            <th className="border">Mas</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border h-[65px] text-[12px] font-montserrat text-blue-gray-900">
            <td className="flex content-center items-center mt-2 ">
              <div className="w-[50px] h-[50px] rounded-full border inline-flex ml-5"></div>
              <td className="px-5">Aqui va la imagen</td>
            </td>
            <td className="border">LGBT</td>
            <td>
              <td className="block">2011-11-18T14:54:39.929-04:00</td>
              <td className="block">2011-11-18T14:54:39.929-04:00</td>
            </td>
            <td className="border">$1000</td>
            <td className="border">500</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}