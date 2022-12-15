// import React, { useRef, useState, useCallback, useEffect, } from "react";
// import { useForm } from "react-hook-form";
// import { AddressAutofill, AddressMinimap, useConfirmAddress, config, } from "@mapbox/search-js-react";
// import clsx from "clsx";

// export default function AutofillForm() {
//   const [showFormExpanded, setShowFormExpanded] = useState(false);
//   const [showMinimap, setShowMinimap] = useState(false);
//   const [feature, setFeature] = useState();
//   const [showValidationText, setShowValidationText] = useState(false);
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const accessToken =
//       "sk.eyJ1IjoiYWJ5YmxhY2ttb3V0aCIsImEiOiJjbGJkN29mMmUwemFlM29vNXcyeDlvaGVyIn0.SO4z3m0gdj7Pe2Rlu_bE9A";
//     setToken(accessToken);
//     config.accessToken = accessToken;
//   }, []);

//   const { formRef, showConfirm } = useConfirmAddress({
//     minimap: true,
//     skipConfirmModal: (feature) => {
//       ["exact", "high"].includes(feature.properties.match_code.confidence);
//     },
//   });

//   const handleRetrieve = useCallback(
//     (res) => {
//       const feature = res.features[0];
//       setFeature(feature);
//       setShowMinimap(true);
//       setShowFormExpanded(true);
//     },
//     [setFeature, setShowMinimap]
//   );

//   function handleSaveMarkerLocation(coordinate) {
//     const coordinateToSave = JSON.stringify(coordinate);
//     console.log(`Marker moved to ${JSON.stringify(coordinate)}.`);
//     return coordinateToSave;
//   }

//   // const handleSubmit = useCallback(
//   //   async (e) => {
//   //     e.preventDefault();
//   //     const result = await showConfirm();
//   //     if (result.type === "nochange") submitForm();
//   //   },
//   //   [showConfirm]
//   // );

//   function submitForm() {
//     setShowValidationText(true);
//     setTimeout(() => {
//       setShowValidationText(false);
//       setFeature(null);
//     });
//   }

//   const { register, formState: { errors }, handleSubmit, } = useForm();

//   function resetForm() {
//     const inputs = document.querySelectorAll("input");
//     inputs.forEach((input) => (input.value = ""));
//     setShowFormExpanded(false);
//     setShowValidationText(false);
//     setFeature(null);
//   }

//   const onSubmit = async (data) => {
//     console.log(handleSaveMarkerLocation());
//     try {
//       const result = await showConfirm();
//       console.log(result);
//       console.log(data);
//       const fullAddress = `${data.address_line1}, ${data?.calle}, ${data.ciudad}, ${data.estado}, ${data.postal}`;
//       console.log(fullAddress);
//       const coordinatesAddress = `${handleSaveMarkerLocation()}`;
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   return (
//     <>
//       <form ref={formRef} className="font-montserrat font-medium" onSubmit={handleSubmit(onSubmit)}>
//         <div className="lg:flex justify-between mb-20">
//           <div className="">
//             {/* Input form */}
//             <label className=""></label>
//             <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
//               <input
//                 className={clsx(
//                   "shadow",
//                   "mt-[12px]",
//                   "appearance-none",
//                   "border w-[100%] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
//                   "hover:border-violet-700 border-2 mb-2"
//                 )}
//                 placeholder="Busca tu espacio."
//                 autoComplete="address-line1"
//                 id="mapbox-autofill"
//                 // {...register("calle")}
//               />
//             </AddressAutofill>
//             {!showFormExpanded && (
//               <div
//                 id="manual-entry"
//                 className="hover:text-purple-900 hover:font-medium text-center cursor-pointer"
//                 onClick={() => setShowFormExpanded(true)}
//               >
//                 Ingresa direccion manual
//               </div>
//             )}
//             <div
//               className="secondary-inputs"
//               style={{ display: showFormExpanded ? "block" : "none" }}
//             >
//               <label
//                 className={clsx(
//                   "text-[12px] font-montserrat font-medium text-blue-gray-500",
//                   "block ml-1 mt-1"
//                 )}
//               >
//                 Local/Edificio
//               </label>
//               <input
//                 className={clsx(
//                   "shadow",
//                   "mt-[10px]",
//                   "appearance-none",
//                   "border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
//                   "hover:border-violet-700 border-2 mb-2"
//                 )}
//                 placeholder="Apartment, suite, unit, building, floor, etc."
//                 autoComplete="address-line2"
//                 // {...register("local")}
//               />
//               <label
//                 className={clsx(
//                   "text-[12px] font-montserrat font-medium text-blue-gray-500",
//                   "block ml-1 mt-1"
//                 )}
//               >
//                 Ciudad
//               </label>
//               <input
//                 className={clsx(
//                   "shadow",
//                   "mt-[12px]",
//                   "appearance-none",
//                   "border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
//                   "hover:border-violet-700 border-2 mb-2"
//                 )}
//                 placeholder="Ciudad"
//                 autoComplete="address-level2"
//                 // {...register("Ciudad")}
//               />

//               <label
//                 className={clsx(
//                   "text-[12px] font-montserrat font-medium text-blue-gray-500",
//                   "block ml-1 mt-1"
//                 )}
//               >
//                 Estado / Region
//               </label>
//               <input
//                 className={clsx(
//                   "shadow",
//                   "mt-[10px]",
//                   "appearance-none",
//                   "border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
//                   "hover:border-violet-700 border-2 mb-2"
//                 )}
//                 placeholder="State / Region"
//                 autoComplete="address-level1"
//                 // {...register("Estado / Región")}
//               />
//               <label
//                 className={clsx(
//                   "text-[12px] font-montserrat font-medium text-blue-gray-500",
//                   "block ml-1 mt-1"
//                 )}
//               >
//                 Código Postal{" "}
//               </label>
//               <input
//                 className="{clsx(
//                   'shadow',
//                   'mt-[10px]',
//                   'appearance-none',
//                   'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
//                   'hover:border-violet-700 border-2 mb-2',)}"
//                 placeholder="Código Postal"
//                 autoComplete="postal-code"
//                 // {...register("Código Postal")}
//               />
//             </div>
//           </div>
//           <div className="" style={{ display: showFormExpanded ? 'block' : 'none'}}>
//             {/* Visual confirmation map */}
//             <div id="minimap-container" className="mt-2 relative w-[300px] h-[200px]">
//               <AddressMinimap
//                 canAdjustMarker={true}
//                 satelliteToggle={true}
//                 feature={feature}
//                 show={showMinimap}
//                 onSaveMarkerLocation={handleSaveMarkerLocation}
//               />
//               {/* Form buttons */}
//               {showFormExpanded && (
//                 <div className="">
//                   <button type="submit" className="btn round" id="btn-confirm">
//                     Confirm
//                   </button>
//                   <button
//                     type="button"
//                     className=""
//                     id="btn-reset"
//                     onClick={resetForm}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </form>
//       {/* Validation text */}
//       {showValidationText && (
//         <div id="validation-msg" className="block">
//           Order successfully submitted.
//         </div>
//       )}
//     </>
//   );
// }


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
            {/* Input form */}
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input
                className={clsx(
                  "shadow",
                  "mt-[12px]",
                  "appearance-none",
                  "border w-[100%] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  "hover:border-violet-700 border-2 mb-2"
                )}
                placeholder="Busca tu espacio"
                autoComplete="address-line1"
                id="mapbox-autofill"
              // {...register("calle")}
              />
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
                "block ml-1 mt-1")}>
                Local/Edificio
              </label>
              <input className={clsx(
                "shadow",
                "mt-[10px]",
                "appearance-none",
                'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                "hover:border-violet-700 border-2 mb-2")}
                placeholder="Apartment, suite, unit, building, floor, etc."
                autoComplete="address-line2"
                {...register("local")} />
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
                autoComplete="address-level2"
                {...register("ciudad")} />

              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Estado / Región
              </label>
              <input
                className={clsx(
                  'shadow',
                  'mt-[10px]',
                  'appearance-none',
                  'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  'hover:border-violet-700 border-2 mb-2')}
                placeholder="State / Región"
                autoComplete="address-level1"
                {...register("estado")}
              />
              <label className={clsx(
                'text-[12px] font-montserrat font-medium text-blue-gray-500',
                'block ml-1 mt-1')}>Código Postal </label>
              <input
                className={clsx(
                  'shadow',
                  'mt-[10px]',
                  'appearance-none',
                  'border w-[300px] h-[40px] rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  'hover:border-violet-700 border-2 mb-2')}
                placeholder="Código Postal"
                autoComplete="postal-code"
                {...register("postal")}
              />
            </div>
          </div>

          <div style={{ display: showFormExpanded ? "block" : "none" }}>
            {/* Visual confirmation map */}
            <div
              id="minimap-container"
              className="mt-2  w-[300px] h-[200px]"
            >
              <AddressMinimap
                canAdjustMarker={true}
                satelliteToggle={true}
                feature={feature}
                show={showMinimap}
                onSaveMarkerLocation={handleSaveMarkerLocation} />
              {/* Form buttons */}
              {showFormExpanded &&
                <div className="flex justify-end w-[300px] h-[25px] mt-20">
                  <button type="submit" className={clsx("px-3 border border-slate-300 rounded-md",
                    "text-sm shadow-sm text-white bg-sky-500 hover:bg-sky-700 text-center")}
                    id="btn-confirm">
                    Confirm
                  </button>
                  <button type="button" className={clsx("px-3 border border-slate-300 rounded-md",
                    "text-sm shadow-sm bg-white text-center ml-2")}
                    id="btn-reset" onClick={resetForm}>
                    Reset
                  </button>
                </div>
              }
            </div>
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