import { useState } from 'react'


const Statistics = ({good, bad, neutral }) => {

  const total = good + neutral + bad;

  const calculatedAverage = () => {
      if (total === 0) return 0;
    return (good * 1 + neutral * 0 + bad * -1)/ total;
  } 

  const calculatedPositive = () => {
      if (total === 0) return "0 %";
    return  `${((good / total) * 100).toFixed(2)}%`;
  } 

  return (
   
    <div>
    <h2>Statistics</h2>
    { total === 0 ? (<div> No feedback given</div>)
    
    : (
    <><p>Good: {good} </p><p>Neutral: {neutral} </p><p>Bad: {bad} </p><p>All: {total} </p><p>Average: {calculatedAverage()} </p><p>Positive: {calculatedPositive()}</p></>
    )
   }
  </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={ () => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App