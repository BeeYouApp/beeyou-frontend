import React, { useState, useCallback, useEffect } from 'react';
import { AddressAutofill, AddressMinimap, useConfirmAddress, config } from '@mapbox/search-js-react';
import clsx from 'clsx';
import { useForm } from "react-hook-form";

export default function AutofillForm() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [feature, setFeature] = useState();
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = 'sk.eyJ1IjoiYWJ5YmxhY2ttb3V0aCIsImEiOiJjbGJkN29mMmUwemFlM29vNXcyeDlvaGVyIn0.SO4z3m0gdj7Pe2Rlu_bE9A';
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
    const coordinateToSave = JSON.stringify(coordinate);
    console.log(`Marker moved to ${JSON.stringify(coordinateToSave)}.`)
    return coordinateToSave
  }

  //
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const result = await showConfirm();
    if (result.type === 'nochange') submitForm();
  }, [showConfirm]);

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
    setShowFormExpanded(false);
    setShowValidationText(false);
    setFeature(null);
  }

  const onSubmit = async (data) => {
    console.log(handleSaveMarkerLocation());
    try {
      const result = await showConfirm();
      console.log(result);
      console.log(data);
      const fullAddress = `${data.address_line1}, ${data?.address_line2}, ${data.zip} ${data.city}, ${data.state}`;
      const coordinatesAddress = `${handleSaveMarkerLocation()}`;

    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <>
      <form ref={formRef} className="font-montserrat font-medium'" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="">
            {/* Input form */}
            <label className=""></label>
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input
                className={clsx(
                  'shadow',
                  'mt-[12px]',
                  'appearance-none',
                  'border w-[100%] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  'hover:border-violet-700 border-2 mb-2',
                )}
                placeholder="Busca tu espacio."
                autoComplete="address-line1"
                id="mapbox-autofill" />
            </AddressAutofill>
            {!showFormExpanded &&
              <div
                id="manual-entry"
                className="hover:text-purple-900 hover:font-medium text-center cursor-pointer"
                onClick={() => setShowFormExpanded(true)}>Ingresa direccion manual
              </div>
            }
            <div className="secondary-inputs" style={{ display: showFormExpanded ? 'block' : 'none' }}>
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Calle
              </label>
              <input className={clsx(
                'shadow',
                'mt-[10px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2',)}
                placeholder="Apartment, suite, unit, building, floor, etc."
                autoComplete="address-line2" />
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Ciudad</label>
              <input className={clsx(
                'shadow',
                'mt-[12px]',
                'appearance-none',
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                'hover:border-violet-700 border-2 mb-2')}
                placeholder="Ciudad"
                autoComplete="address-level2" />

              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Estado / Region
              </label>
              <input
                className={clsx(
                  'shadow',
                  'mt-[10px]',
                  'appearance-none',
                  'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  'hover:border-violet-700 border-2 mb-2',)}
                placeholder="State / Region"
                autoComplete="address-level1"
              />
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Codigo Postal </label>
              <input
                className="{clsx(
              'shadow',
              'mt-[10px]',
              'appearance-none',
              'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              'hover:border-violet-700 border-2 mb-2',)}"
                placeholder="Codigo Postal"
                autoComplete="postal-code" />
            </div>
          </div>
          <div className="">
            {/* Visual confirmation map */}
            <div
              id="minimap-container"
              className="mt-2"
            >
              <AddressMinimap
                canAdjustMarker={true}
                satelliteToggle={true}
                feature={feature}
                show={showMinimap}
                onSaveMarkerLocation={handleSaveMarkerLocation} />
            </div>
          </div>
        </div>

        {/* Form buttons */}
        {showFormExpanded &&
          <div className="">
            <button type="submit" className="btn round" id="btn-confirm">
              Confirm
            </button>
            <button type="button" className="" id="btn-reset" onClick={resetForm}>
              Reset
            </button>
          </div>
        }
      </form>

      {/* Validation text */}
      {showValidationText &&
        <div id="validation-msg" className="">Order successfully submitted.</div>
      }
    </>
  );
};