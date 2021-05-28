import React from "react";

export default function ContentPart5() {
  return (
    <div className="Content2">
      <div className="Content2Col ColorGrisClaro MargenIzqContent2Col CursorPointer">
        <p style={{ fontSize: 38, marginTop: 45 }}>
          <b>AirTag</b>
        </p>
        <p className="FontBolder" style={{ fontSize: 21, marginTop: -33 }}>
          Lose your kack for losing things.
        </p>
        <p
          id="HoverSubrayar"
          className="FontBolder ColorCelesteOscuroL"
          style={{ fontSize: 18, marginTop: -10 }}
        >
          Learn more >
        </p>
        <img
          style={{ width: 300, height: 380, marginTop: 37 }}
          src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FAirTag.png?alt=media&token=67fa6d3c-5051-424d-8e6d-96a48e3207c2"
        />
      </div>
      <div className="Content2Col ColorGrisClaro MargenDerContent2Col CursorPointer">
        <p style={{ fontSize: 38, marginTop: 60 }}>
          <img
            style={{ width: 30, height: 30 }}
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FlogoAppleBlack.png?alt=media&token=aa2f8448-bf11-4ef1-9aa3-6195be4175d8"
          />
          <b>Arcade</b>
        </p>
        <p className="FontBolder" style={{ fontSize: 20.5, marginTop: -33 }}>
          Wonderbox: The Adventure Maker. Play now.
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            id="HoverSubrayar"
            className="FontBolder ColorCelesteOscuroL"
            style={{ fontSize: 18, marginTop: -10, marginRight: 15 }}
          >
            Learn more >
          </p>
          <p
            id="HoverSubrayar"
            className="FontBolder ColorCelesteOscuroL"
            style={{ fontSize: 18, marginTop: -10, marginLeft: 15 }}
          >
            Try it free¹↗
          </p>
        </div>
        <img
          style={{ width: 580, height: 370 }}
          src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FArcade.png?alt=media&token=aeaee797-843c-455f-a378-8099300ef746"
        />
      </div>
    </div>
  );
}
