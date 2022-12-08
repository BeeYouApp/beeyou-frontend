import clsx from 'clsx';
import React, { useState, useCallback, useEffect } from 'react';
import { AddressAutofill} from '@mapbox/search-js-react';

export default function SearchMap () {
  return(
    <form className='font-montserrat font-medium'>
      <AddressAutofill accessToken="sk.eyJ1IjoiYWJ5YmxhY2ttb3V0aCIsImEiOiJjbGJkN29mMmUwemFlM29vNXcyeDlvaGVyIn0.SO4z3m0gdj7Pe2Rlu_bE9A">
        <label className='mr-3'>Direccion</label>
        <input
            className='border'
            name="address" 
            placeholder="Adress" 
            type="text"
            autoComplete="address-line1"/>
      </AddressAutofill>
      <label className='mr-3 ml-3'>Apart</label>
        <input
        className='border'
            name="apartment" 
            placeholder="Apartamento" 
            type="text"
            autoComplete="address-line2"/>
        <label className='mr-3 ml-3'>Ciudad</label>
        <input
            className='border'
            name="city" 
            placeholder="Ciudad" 
            type="text"
            autoComplete="address-level2"/>
        <label className='mr-3 ml-3'>Estado</label>
        <input
            className='border'
            name="state" 
            placeholder="Estado" 
            type="text"
            autoComplete="address-level1"/>
        <label className='mr-3 ml-3'>Pais</label>
        <input
            className='border'
            name="country" 
            placeholder="Pais" 
            type="text"
            autoComplete="country"/>
        <label className='mr-3 ml-3'>C.P.</label>
        <input
            className='border'
            name="postcode" 
            placeholder="Codigo Postal" 
            type="text"
            autoComplete="postal-code"/>
    </form>
  )
}