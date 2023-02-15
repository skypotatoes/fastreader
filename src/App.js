
import './App.css';
import genesis from './genesis'
import ulysses from './ulysses';
import drNo from './drNo';
import SpeedSlider from './SpeedSlider'; // Import the SpeedSlider component from the SpeedSlider.js file
//const textFile = genesis
//const textFile = ulysses
const textFile = drNo


function App() {

    //render the SpeedSlider component with the text
    return (<>
    
    <SpeedSlider text={textFile} />
    <div className="App">
      
    </div>
    </>); // Render the SpeedSlider component, which renders Typewriter component
 
}

export default App;

export { textFile }; // Export the textFile variable as well