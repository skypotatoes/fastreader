import React, { useRef, useState, useEffect } from "react";

//function to listen for delete or backspace key press. if pressed, the word index updates to current index -1




function Typewriter(props) {
  const { text, speed, ref } = props;
  //use state to store the current word index and the displayed text
  
  
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");


    //split the text into words by spaces
    const words = text.split(/ |\n/);
  //use effect to update the displayed text every time the word index changes
  useEffect(() => {
    //get the current word
    const currentWord = words[wordIndex];
    //set the displayed text to the current word
    setDisplayedText(currentWord);

  }, [wordIndex, text,words]);

  //use effect to set an interval to change the word index at the given speed
  useEffect(() => {
    //calculate the interval in milliseconds based on the speed in words per minute
    
    const interval = 60000 / speed;
    //set the interval to change the word index
    const timer = setInterval(() => {
      //if the word index is less than the number of words, change the word index
      if (wordIndex < text.split(" ").length) {
        setWordIndex(wordIndex + 1);
      } else {
        //otherwise, clear the interval and reset the word index to zero
        clearInterval(timer);
        setWordIndex(0);
      }
    }, interval);
    //return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [wordIndex, text, speed]);

  //return the displayed text in a div element
  return <><div className="bam">{displayedText}</div><div className="stats">{wordIndex+1} of {words.length+1}</div> </>;
}

export default Typewriter;