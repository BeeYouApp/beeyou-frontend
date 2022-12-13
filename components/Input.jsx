import clsx from "clsx";
import React from 'react'
import { register } from "../lib/api"

export default function Input({ label, id, type, value, message, placeholder, htmlFor, required, style }) {
  return (
    <>
      <label className={clsx(
        'text-[12px] font-montserrat font-medium text-blue-gray-500',
        'block ml-1 mt-2',)}
        htmlFor={htmlFor}>
        {label}
      </label>
      <input className={clsx(
        'shadow',
        'mt-[12px]',
        'appearance-none',
        'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        'hover:border-violet-700 border-2 mb-2',
        style
      )}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(htmlFor, { required }, {
          pattern: {
            value: { value },
            message: { message }
          }
        })} />
    </>
  )
}