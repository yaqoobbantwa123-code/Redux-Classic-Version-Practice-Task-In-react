import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const incrementByAmount = () => {
    dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 });
  };

  const decrementByFive = () => {
    dispatch({type: "DECREMENT_BY_FIVE"})
  }

  const incrementByTen = () => {
    dispatch({type: "INCREMENT_BY_TEN"})
  }

  const multiplyByTwo = () => {
    dispatch({type: "MULTIPLY_BY_TWO"})
  }

  const divideByTwo = () => {
    dispatch({type: "DIVIDE_BY_TWO"})
  }
  return (
    <div className="app">
      <div className="counter-card">
        <h1>Classic Redux Counter</h1>
        <p className="subtitle">Manage your state with Redux</p>

        <h2 className="count">{count}</h2>

        <div className="button-group">
          <button className="increment-btn" onClick={increment}>
            + Increment
          </button>

          <button className="decrement-btn" onClick={decrement}>
            - Decrement
          </button>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>

          <button className="amount-btn" onClick={incrementByAmount}>
            + Add 5
          </button>

          <button className="decrement-btn" onClick={decrementByFive}>
            Decrement -5
          </button>

          <button className="increment-btn" onClick={incrementByTen}>
            Increment +10
          </button>

          <button className="amount-btn" onClick={multiplyByTwo}>
            Multiply * 2
          </button>

          <button className="reset-btn" onClick={divideByTwo}>
            Divide by 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
