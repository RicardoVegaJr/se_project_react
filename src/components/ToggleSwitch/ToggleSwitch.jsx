import React, {useState} from "react";
import "./ToggleSwitch.css";


const ToggleSwitch = () => {

  const [currentTemperatureUnit, handleToggleSwitchChange] = useState('C')

const handleChange = (e) =>{
if (currentTemperatureUnit === 'C') handleToggleSwitchChange('F')
  if (currentTemperatureUnit === 'F') handleToggleSwitchChange('C')
}


return (
  <label className="switch">
    <input type='checkbox'
     className="switch__box"
      onChange={handleChange}/> 
      <span className={currentTemperatureUnit === 'F' ? "switch__slider switch__slider-F": "switch__slider switch__slider-C"}></span>
      <p>F</p>
      <p>C</p>
  </label>
)

}

export default ToggleSwitch;