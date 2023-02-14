import './App.css';
import genesis from './genesis'
import ulysses from './ulysses';
import SpeedSlider from './SpeedSlider'; // Import the SpeedSlider component from the SpeedSlider.js file
//const textFile = genesis
const textFile = ulysses

function App() {
  
 //render the SpeedSlider component with the text
 return <SpeedSlider text={textFile} />; // Render the SpeedSlider component instead of the Typewriter component
}

export default App;

export { textFile }; // Export the textFile variable as well