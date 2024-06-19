import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

import {counterActions } from '../store/index'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandle=()=>{
    dispatch(counterActions.increase(5))

  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandle}>increas by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
