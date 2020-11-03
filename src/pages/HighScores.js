import React, { useState, useEffect } from 'react'
import { ScoreLi, ScoresList } from '../styled/HighScores';

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

      }
    }
    loadHighScores()
  }, [])

  return (
    <div>
      <h1>
        HighScores
      </h1>
      <ScoresList>
        {highScore.map((score) => (<ScoreLi key={score.id} >{score.fields.name}- {score.fields.score}</ScoreLi>))}
      </ScoresList>
    </div>
  )
}
