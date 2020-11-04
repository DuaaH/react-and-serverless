import React, { useState, useEffect } from 'react'
import { ScoreLi, ScoresList } from '../styled/HighScores';
import { StyledTitle } from '../styled/Random';

export default function HighScores() {

  const [highScore, sethighScore] = useState([])

  useEffect(() => {
    console.log("high scores");
    const loadHighScores = async () => {
      try {
        const respond = await fetch('/.netlify/functions/getHighScores');
        const scores = await respond.json();
        console.log("s: ", scores);
        sethighScore(scores)
      }
      catch (err) {
        console.log("error");
      }
    }
    loadHighScores()
  }, [])

  return (
    <div>
      <StyledTitle>
        HighScores
      </StyledTitle>
      <ScoresList>
        {highScore.map((score, index) => (<ScoreLi key={score.id} >{index + 1}. {score.fields.name}- {score.fields.score}</ScoreLi>))}
      </ScoresList>
    </div>
  )
}
