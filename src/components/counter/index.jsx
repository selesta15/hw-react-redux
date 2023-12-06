import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../../redux/counter/type";
import { decrementCounterActionCreator, incrementCounterActionCreator } from "../../redux/counter/actions";
import {clearCounterActionCreator} from "../../redux/counter/actions"

const CounterApp = () => {
  const dispatch = useDispatch()
  const stateCounter = useSelector(state => state.counter.counter)
  
    


  const handleIncrementCounter = () => {
    dispatch(incrementCounterActionCreator()) 
    }

  const handleDecrementCounter = () => {
    dispatch(decrementCounterActionCreator()) 
    
  }

  const handleClearCounter = () => {
    dispatch(clearCounterActionCreator())
  }


    return (
        <div>
           <button onClick={handleIncrementCounter}>
              +
             </button>
             {stateCounter}
            <button onClick={handleDecrementCounter}>
              -
            </button>
            <button onClick={handleClearCounter}>
              очистить данные
            </button>
        </div>
    )
}



export default CounterApp