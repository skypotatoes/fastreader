import React from "react";

function Progress(props){
//display current word out of total words
const {wordIndex, words} =props
return (<>
    <div className="tokenTracker">{wordIndex+1} of {words.length+1}</div>
    <div className="percentageComplete">{Math.trunc(100*((wordIndex+1)/(words.length+1)))}%</div>
    </>);
}

export default Progress;
