

import './App.css';
import genesis from './library/genesis'
import ulysses from './library/ulysses';
import drNo from './library/drNo';
import ConanDoyleSassana from './library/ConanDoyleSassana';
import sample from './library/sample';
import SpeedSlider from './SpeedSlider'; // Import the SpeedSlider component from the SpeedSlider.js file
//const textFile = genesis
//const textFile = ulysses
//const textFile = drNo
//const textFile = ConanDoyleSassana
const textFile = sample;
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



