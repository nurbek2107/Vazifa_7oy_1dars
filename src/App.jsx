import "./App.css"
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount
} from "./features/counter/counterSlice";
import { Button } from "@material-tailwind/react";
function App() {
const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inputValue= useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(+inputValue.current.value));
  };
  return (
    <div className="">
      <div className=" flex gap-5 items-center justify-center mt-10">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>

        <form onSubmit={handleSubmit}>
          <input ref={inputValue} type="text" />
          <button>
            
            <Button>Add</Button>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App