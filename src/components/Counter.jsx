import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
// const increment = "INCREMENT";
function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const { increment, decrement, increase, toggleCounter } = counterActions;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      {showCounter && <span> {counter} </span>}
      <button onClick={decrementHandler}>Decrement</button> <br />
      <button onClick={() => dispatch(toggleCounter())}>Text Show</button>
    </div>
  );
}

export default Counter;
