import React, { useEffect, useState } from 'react'
import { useScore } from '../contexts/ScoreContext'
import { StyledCharacter } from '../styled/Game';
import { StyledLink } from '../styled/Navbar'

export default function GameOver({ history }) {
  const [score] = useScore();
  const [scoreMsg, setScoreMsg] = useState('');

  if (score === -1) {
    history.push('/');
  }

  useEffect(() => {
    const saveHighScore = async () => {

      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ name: 'duaa7', score }),
        };
        const res = await fetch(
          '/.netlify/functions/saveHighScore',
          options
        );
        const data = await res.json();
        console.log("dataa: ", data);
        if (data.id) {
          setScoreMsg('Congrats :) you got a high score ')
        }
        else {
          setScoreMsg(' sorry, keep trying to get a high score ')
        }
      } catch (error) {
        console.error(error);
      }
    }
    saveHighScore();
  }, [])
  return (
    <div>
      <h1>
        game over
      </h1>
      <StyledCharacter>{score}</StyledCharacter>
      <p>{scoreMsg}</p>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  )
}
