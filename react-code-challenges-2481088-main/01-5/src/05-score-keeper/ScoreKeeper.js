import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] /* BigInteger/**/  = useState(parseInt(localStorage.getItem('score')) || 0);
  console.log(setScore);
  window.setScore = setScore;

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={(_) => setScore(score + 1)}>+</button>
      <button onClick={(_) => setScore(score - 1)}>-</button>
    </div>
  )
}
