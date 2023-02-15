import React from "react";

function Progress(props){
//display current word out of total words
const {wordIndex, words,speed,pause} =props
console.log(pause)
let pauseIndicator=""
if(pause){
    pauseIndicator="Paused"
} 

if(!pause){
    pauseIndicator=""  
}

return (<>
    <div className="tokenTracker">{wordIndex+1} of {words.length+1}</div>
    <div className="percentageComplete">{Math.trunc(100*((wordIndex+1)/(words.length+1)))}%</div>
    <div className="speed">{speed} wpm</div>
    <div className="pause"> {pauseIndicator} </div>

    </>);
}

export default Progress;
