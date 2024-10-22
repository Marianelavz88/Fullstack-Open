import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculatedAverage = () => {
    const total = good + neutral + bad;
    if (total === 0) return 0;
    return (good * 1 + neutral * 0 + bad * -1)/ total;
  } 

  const calculatedPositive = () => {
    const total = good + neutral + bad;
    if (total === 0) return "0 %";
    return  `${((good / total) * 100).toFixed(2)}%`;
  } 
  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={ () => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>
    <h2>Statistics</h2>
    <p>Good: {good} </p>
    <p>Neutral: {neutral} </p>
    <p>Bad: {bad} </p>
    <p>All: {good + neutral + bad} </p>
    <p>Average: {calculatedAverage ()} </p>
    <p>Positive: {calculatedPositive ()}</p>
    </div>
  )
}

export default App