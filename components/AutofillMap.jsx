import React, { useRef, useState, useCallback, useEffect } from 'react';
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
    const coordinateToSave = JSON.stringify(coordinate);
    console.log(`Marker moved to ${JSON.stringify(coordinate)}.`)
    return coordinateToSave
  }

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(handleSaveMarkerLocation());
    try {
      const result = await showConfirm();
      console.log(result);
      console.log(data);
      const fullAddress = `${data.address_line1}, ${data?.calle}, ${data.ciudad}, ${data.estado}, ${data.postal}`;
      console.log(fullAddress)
      const coordinatesAddress = `${handleSaveMarkerLocation()}`;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <>
      <form ref={formRef} className="font-montserrat font-medium'" onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex justify-between mb-20">
          <div>

          </div>
        </div>


      </form>

      {/* Validation text */}
      {showValidationText &&
        <div id="validation-msg" className="block">Order successfully submitted.</div>
      }
    </>
  );
};