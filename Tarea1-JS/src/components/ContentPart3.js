import React from "react";

export default function ContentPart3() {
  return (
    <div className="Content ColorGrisClaro CursorPointer">
      <p className="ColorNegroL FirstFontOfContent">
        <b>iMac</b>
      </p>
      <p className="ColorNegroL FontBolder SecondFontOfContent">Say hello.</p>
      <p className="ColorNegroL ThirdFontOfContent">
        Check back later for availability
      </p>
      <p
        id="HoverSubrayar"
        className="ColorCelesteMedioL FontBolder FourthFontOfContent"
      >
        Learn more >
      </p>
      <img
        style={{ width: 920, height: 400, marginBottom: 30 }}
        src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FiMac.png?alt=media&token=5697c220-ef7a-44db-adfb-1393cfc69507"
      />
    </div>
  );
}
