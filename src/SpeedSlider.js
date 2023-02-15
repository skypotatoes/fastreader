import React, { useState } from "react";
import {textFile} from "./App"; // Import the App component from the Typewriter.js file
import Typewriter from "./Typewriter";

  // //does this need to be applied to an input element instead of the document?
  // document.addEventListener('keydown',
  //   function (e) {

  //     if (e.key === 'Backspace') {
  //       console.log(e);

  //       if (wordIndex  < 1) { setWordIndex(0) } else { setWordIndex(wordIndex - 1) }
  //       ;
  //     }
  //   });




function SpeedSlider(props) {
 
 
   // Create a state variable named speed that will store the slider value, and initialize it to 50
  const [speed, setSpeed] = useState(50);
if (speed <1){ setSpeed(50)}
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
      <input id='slider' className="slider" type="range" min="0" max="800" value={speed} step="50" autoFocus="on" onChange={handleChange}/>
    </div>
  );
}

export default SpeedSlider;