import React, { useState } from "react";
import {textFile} from "./App"; // Import the App component from the Typewriter.js file
import Typewriter from "./Typewriter";

function SpeedSlider() {
  // Create a state variable named speed that will store the slider value, and initialize it to 50
  const [speed, setSpeed] = useState(50);

  // Define a function named handleChange that will update the speed state variable when the slider value changes
  function handleChange(event) {
    // Get the slider value from the event object
    const newSpeed = event.target.value;

    // Update the speed state variable with the slider value
    setSpeed(newSpeed);
  }

  // Return the JSX elements that you want to render
  return (
    <div>
      <Typewriter text={textFile} speed={speed} /> 
      <input className="slider" type="range" min="10" max="800" value={speed} step="50" onChange={handleChange}/>
    </div>
  );
}

export default SpeedSlider;