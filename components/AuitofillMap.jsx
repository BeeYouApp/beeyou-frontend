import React, { useState, useCallback, useEffect } from 'react';
import { AddressAutofill, AddressMinimap, useConfirmAddress, config } from '@mapbox/search-js-react';
 
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
        console.log(`Marker moved to ${JSON.stringify(coordinate)}.`)
    }
    
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
 
    return (
        <>
            <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="grid grid--gut24 mb-[60px]">
            <div className="col col-auto-m w-full">
            
            {/* Input form */}
            <label className="txt-sm font-bold color-gray mb3">Address</label>
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
            <input
            className="input mb-[12px]"
            placeholder="Start typing your address, e.g. 123 Main..."
            autoComplete="address-line1"
            id="mapbox-autofill"
            />
            </AddressAutofill>
            { !showFormExpanded && 
            <div
            id="manual-entry"
            className="w-[180px] mt-[6px] link font-ms border-b color-gray color-black-on-hover"
            onClick={() => setShowFormExpanded(true)}
            >
            Enter an address manually
            </div>
            }
            <div className="secondary-inputs" style={{ display: showFormExpanded ? 'block' : 'none' }}>
            <label className="txt-s txt-bold color-gray mb-[3px]">Address Line 2</label>
            <input
            className="input mb12"
            placeholder="Apartment, suite, unit, building, floor, etc."
            autoComplete="address-line2"
            />
            <label className="txt-s txt-bold color-gray mb3">City</label>
            <input
            className="input mb12"
            placeholder="City"
            autoComplete="address-level2"
            />
            <label className="txt-s txt-bold color-gray mb3"
            >State / Region</label
            >
            <input
            className="input mb12"
            placeholder="State / Region"
            autoComplete="address-level1"
            />
            <label className="txt-s txt-bold color-gray mb3"
            >ZIP / Postcode</label
            >
            <input
            className="input"
            placeholder="ZIP / Postcode"
            autoComplete="postal-code"
            />
            </div>
            </div>
            <div className="col col--auto-mm">
            {/* Visual confirmation map */}
            <div
            id="minimap-container"
            className="h-[240px] w-[360px] relative mt-[18px]"
            >
            <AddressMinimap
            canAdjustMarker={true}
            satelliteToggle={true}
            feature={feature}
            show={showMinimap}
            onSaveMarkerLocation={handleSaveMarkerLocation}
            />
            </div>
            </div>
            </div>
            
            {/* Form buttons */}
            { showFormExpanded && 
            <div className="mb30 submit-btns">
            <button type="submit" className="btn round" id="btn-confirm">
            Confirm
            </button>
            <button type="button" className="btn round btn--gray-light ml3" id="btn-reset" onClick={resetForm}>
            Reset
            </button>
            </div>
            }
            </form>
        
            {/* Validation text */}
            { showValidationText && 
                <div id="validation-msg" className="mt-[24px] txt-m font-bold">Order successfully submitted.</div>
            }
        </>
    );
};