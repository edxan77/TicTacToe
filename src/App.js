import { useEffect, useReducer, useState } from "react";

function App() {
  const [val, setval] = useState(Array(9).fill(null));
  const [count, setcount] = useState(0);
  const [win, setwin] = useState(false);
  const [result, setresult] = useState("");

  const handleClikk = function (id) {
    return function k() {
      if (count % 2 == 0 && val[id] === null && !win) {
        val[id] = "x";
        setcount(count + 1);
      }
      if (count % 2 !== 0 && val[id] === null && !win) {
        val[id] = "o";
        setcount(count + 1);
      }
      if (win) {
        setcount(count - count);
      }

      if (!val.includes(null) && !win) {
        setwin(true);
        setresult("Draw");
      }

      for (let g = 0; g < val.length; g++) {
        if (
          (val[0] === "x" && val[1] === "x" && val[2] === "x") ||
          (val[3] === "x" && val[4] === "x" && val[5] === "x") ||
          (val[6] === "x" && val[7] === "x" && val[8] === "x") ||
          (val[0] === "x" && val[3] === "x" && val[6] === "x") ||
          (val[1] === "x" && val[4] === "x" && val[7] === "x") ||
          (val[2] === "x" && val[5] === "x" && val[8] === "x") ||
          (val[0] === "x" && val[4] === "x" && val[8] === "x") ||
          (val[2] === "x" && val[4] === "x" && val[6] === "x")
        ) {
          setwin(true);
          setresult("Win X");
        }

        if (
          (val[0] === "o" && val[1] === "o" && val[2] === "o") ||
          (val[3] === "o" && val[4] === "o" && val[5] === "o") ||
          (val[6] === "o" && val[7] === "o" && val[8] === "o") ||
          (val[0] === "o" && val[3] === "o" && val[6] === "o") ||
          (val[1] === "o" && val[4] === "o" && val[7] === "o") ||
          (val[2] === "o" && val[5] === "o" && val[8] === "o") ||
          (val[0] === "o" && val[4] === "o" && val[8] === "o") ||
          (val[2] === "o" && val[4] === "o" && val[6] === "o")
        ) {
          setwin(true);
          setresult("Win O");
        }
      }
      console.log(id);
      console.log(val);
    };
  };

  const res = function () {
    setval(Array(9).fill(null));
    setwin(false);
  };
  console.log(val);

  console.log(win);

  return (
    <div className={!win ? "Appp" : "Appp2"}>
      {val.map(function (item, i) {
        if (!win) {
          return (
            <div
              key={Math.random()}
              className={
                val[i] != null && val[i] !== "o"
                  ? "sqr2"
                  : val[i] != null && val[i] !== "x"
                  ? "sqr3"
                  : "sqr"
              }
              onClick={handleClikk(i)}
            >
              {val[i]}
            </div>
          );
        }
      })}
      <span className="result">{win ? result : ""}</span>
      <button onClick={res} className={win ? "restart" : "restarthide"}>
        New Game
      </button>
    </div>
  );
}

export default App;
