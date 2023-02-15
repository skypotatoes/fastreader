import React, { useState } from "react";
import { textFile } from "../App"; // Import the App component from the Typewriter.js file
import Typewriter from "./Typewriter";

function SpeedSlider(props) {


  // Create a state variable named speed that will store the slider value, and initialize it to 50
  const [speed, setSpeed] = useState(50);
  const [pause, setPause] = useState(false);
  const [fontSize, setFontSize] = useState(112);
  const [wordIndex, setWordIndex] = useState(0);
  const [context, setContext] = useState(false);
  const [textAlign, setTextAlign] = useState('center')

  if (speed < 1) { setSpeed(50) }
  // Define a function named handleChange that will update the speed state variable when the slider value changes
  function handleChange(event) {
    // Get the slider value from the event object
    const newSpeed = event.target.value;

    // Update the speed state variable with the slider value
    setSpeed(newSpeed);
  }

  function handleKeyPress(event) {
    console.log(event.key);
    if (event.key === ' ') {
      setPause(!pause);


    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFontSize(fontSize + 10);

    }


    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFontSize(fontSize - 10);

    }

    if(event.key === 'Backspace'|event.key === 'Delete') {
     
      event.preventDefault();
      setWordIndex(wordIndex - 1);

    }
    
    if(event.key === 'c'| event.key === 'C') {

     
      event.preventDefault();
      setContext(!context); 
      if (context) {
      setTextAlign('left')}
      if (!context) {
        setTextAlign('center')}
    }


  }

  // Return the JSX elements that you want to render
  return (
    <div>
      <Typewriter text={textFile} speed={speed} pause={pause} fontSize={fontSize} wordIndex={wordIndex} setWordIndex={setWordIndex} context={context} textAlign={textAlign}/>
      <input id='slider' className="slider" type="range" marks="true" min="0" max="1200" value={speed} step="50" autoFocus="on" onChange={handleChange} onKeyDown={handleKeyPress} />
    </div>
  );
}

export default SpeedSlider;