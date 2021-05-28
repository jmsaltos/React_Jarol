import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Part1 } from "./components/Part1";
import { Funct } from "./components/Funct";

function App() {
  const [getLbl1, setgetLbl1] = useState(0);
  const [getLbl2, setgetLbl2] = useState(0);
  const [getLbl3, setgetLbl3] = useState(0);
  const [getLbl4, setgetLbl4] = useState(0);
  const [result, setResult] = useState(0);
  const [toFunc, setToFunc] = useState(0);

  const nmOp = ["SUMA", "RESTA", "MULTIPLICA", "DIVIDE"];
  const Op = [
    result + getLbl1,
    result - getLbl2,
    result * getLbl3,
    result / getLbl4,
  ];
  const valLbl = [getLbl1, getLbl2, getLbl3, getLbl4];

  //const verifDivision = () =>{
  //   if(getLbl4 === 0 ) return 1
  //   else return setgetLbl4
  // }

  const cambiarOp = (num) => {
    //console.log("el num act es " + num);
    setToFunc(num);
  };

  return (
    <div className="App">
      <div className="BloqueInicial">
        <h1 className="BLoqueInterno">
          TOTAL : {result} {""}
        </h1>
        <button className="BLoqueInterno"  onClick={() => setResult(Op[toFunc])} type="button">
          <Part1 valor={valLbl[toFunc]} op={nmOp[toFunc]} />
        </button>
      </div>
      <div onClick={() => cambiarOp(0)}>
        <Funct func={nmOp[0]} lb={setgetLbl1} />
      </div>
      <div onClick={() => cambiarOp(1)}>
        <Funct func={nmOp[1]} lb={setgetLbl2} />
      </div>
      <div onClick={() => cambiarOp(2)}>
        <Funct func={nmOp[2]} lb={setgetLbl3} />
      </div>
      <div onClick={() => cambiarOp(3)}>
        <Funct func={nmOp[3]} lb={setgetLbl4} />
      </div>
    </div>
  );
}

export default App;
