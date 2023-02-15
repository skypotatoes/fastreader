

import './App.css';
import genesis from './library/genesis'
import ulysses from './library/ulysses';
import drNo from './library/drNo';
import ConanDoyleSassana from './library/ConanDoyleSassana';
import fastreaderBlurb from './library/fastreaderBlurb';
import sample from './library/sample';
import SpeedSlider from './SpeedSlider'; // Import the SpeedSlider component from the SpeedSlider.js file
//const textFile = genesis
//const textFile = ulysses
//const textFile = drNo
//const textFile = ConanDoyleSassana
const textFile = fastreaderBlurb;
function App() {


    //render the SpeedSlider component with the text
    return (<>
        

        <div className="App">
        <SpeedSlider text={textFile} />

        </div>
    </>); // Render the SpeedSlider component, which renders Typewriter component

}

export default App;

export { textFile }; // Export the textFile variable as well



