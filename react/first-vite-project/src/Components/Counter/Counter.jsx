import { useEffect, useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (count > 0) setShowPopup(false);
    if (count < 0) {
      setCount(0);
      setShowPopup(true);
    }
  }, [count]);

  function add() {
    setCount(count + 1);
  }
  function min() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>{count}</h1>

      <div className="btns">
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
        <button onClick={reset}>Reset</button>
      </div>

      {showPopup && (
        <div className="popup">
          <h3>Errore!</h3>
          <p>Il counter non può andare sotto zero</p>
        </div>
      )}
    </div>
  );
}