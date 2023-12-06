import './App.css';
import { useState } from 'react';
import CounterApp from './components/counter'
import Balance from './components/balance'


function App() {
  const [counter, setCounter] = useState(0)


  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrementCounter = () => {
    setCounter(prev => prev - 1)
  }


  return (
    <div>
      <p>with useState</p>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {counter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      <p>-----------------------</p>
      <p>with React-Redux</p>
     < CounterApp />
     <p>-----------------------</p>
     <Balance/>
     
    </div>
  );
}

export default App;
