import React, { useEffect, useState } from 'react'
import { useScore } from '../contexts/ScoreContext'
import { StyledCharacter } from '../styled/Game';
import { StyledLink } from '../styled/Navbar'
import { StyledTitle } from '../styled/Random';

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
  }, [score])
  return (
    <div>
      <StyledTitle>
        game over
      </StyledTitle>
      <h2>{scoreMsg}</h2>
      <StyledCharacter>{score}</StyledCharacter>
      <div>
        <StyledLink to="/">Go Home</StyledLink>
      </div>
      <div><StyledLink to="/game">Play Again</StyledLink></div>
    </div>
  )
}
