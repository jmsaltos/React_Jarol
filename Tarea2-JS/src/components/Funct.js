import React, { useState } from "react";

export const Funct = ({ func, lb }) => {
  const [numLb, setNumLb] = useState(0);
  const [act, setact] = useState(0);
  const cambiarOp = (num) => {
    console.log("el num act es " + num);
    setact(num);
  };
  return (
    <div className="BloqueFunction">
      <div className="VerticalList">
        <label className="texto">
          {" "}
          {func} {lb(numLb)}
        </label>
      </div>
      <div>
        <input className="InputWidth"
          onChange={(ev) => setNumLb(ev.target.valueAsNumber)}
          type="number"
        />
      </div>
    </div>
  );
};
