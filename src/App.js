
import React, { useState } from "react";
import './App.css';
import fastreaderBlurb from './library/fastreaderBlurb';
import SpeedSlider from './components/SpeedSlider'; // Import the SpeedSlider component from the SpeedSlider.js file



function App() {
    const [wordIndex, setWordIndex] = useState(0);
    const [textFile, setTextFile] = useState(fastreaderBlurb)
    const handleFileUpload = (event) => {
        // Get the file from the event target
        const file = event.target.files[0];
        // Check if the file is a txt file
        if (file.type === 'text/plain') {
            setWordIndex(0);
          // load file content as string into a variable
          
          const reader = new FileReader();
         
          reader.readAsText(file);
          reader.onloadend = () => {
            const text = reader.result;
            setTextFile(text);
           }
        
        } else {
          // Show an error message
          alert('Please upload a txt file');
        }
      }
    //render the SpeedSlider component with the text
    return (<>
        

        <div className="App">
        <SpeedSlider textFile={textFile} wordIndex={wordIndex} setWordIndex={setWordIndex} />
        
    <input type="file" onChange={handleFileUpload} />
  
        </div>
    </>); // Render the SpeedSlider component, which renders Typewriter component

}

export default App;



