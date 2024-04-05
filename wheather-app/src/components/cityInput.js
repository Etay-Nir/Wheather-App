import React from "react";

    const cityInput = ({ handleCity, handleUnits }) => {
        return (
            <div className="section-section_input">
                <input 
                onKeyDown={handleCity}
                type="text"
                name="city"
                placeholder="Enter City" 
                />
                <button onClick={handleUnits}>℉</button>
            </div>
        );
    };


export default cityInput;