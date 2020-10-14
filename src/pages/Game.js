import React, { useState, useEffect } from 'react'
import { StyledGame, StyledScore, StyledTimer, StyledCharacter } from '../styled/Game'
import { Strong } from '../styled/Random'

export default function Game({ history }) {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(()=> updateTime(currentTime, 1))
    return ()=> clearInterval(interval)
  }, []);


  const updateTime= (startTime)=>{
    const endTime= new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMsString = ('0000' + msPassedStr).slice(-5);
    //00000 : first 2 are the seconds, and the last 3 are the ms that have passed
    console.log(formattedMsString);
    const updatedSeconds = MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1;
    const updatedMs =
      1000 -
      parseInt(formattedMsString.substring(formattedMsString.length - 3));
      console.log(updatedMs);
       setSeconds(addLeadingZeros(updatedSeconds, 2));
        setMs(addLeadingZeros(updatedMs, 3));
  }

  const addLeadingZeros = (num, length) => {
    let zeros = '';
    for (let i = 0; i < length; i++) {
      zeros += '0';
    }
    return (zeros + num).slice(-length);
  };

  useEffect(() => {
    if (seconds <= -1) {
      history.push('/gameOver');
    }
  }, [seconds, ms, history]);

  return (
    <StyledGame>
      <StyledScore>Score:<Strong>{score}</Strong></StyledScore>
      <StyledCharacter>A</StyledCharacter>
  <StyledTimer>Time: <Strong>{seconds} :{ms}</Strong></StyledTimer>
    </StyledGame>
  )
}