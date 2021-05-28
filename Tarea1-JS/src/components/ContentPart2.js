import React from "react";

export default function ContentPart2() {
  return (
    <div className="Content ColorNegro CursorPointer">
      <p className="ColorBlancoL FirstFontOfContent">
        <b>iPad Pro</b>
      </p>
      <p className="ColorBlancoL FontBolder SecondFontOfContent">
        Supercharged by Apple M1 chip.
      </p>
      <p className="ColorCelesteClaroL ThirdFontOfContent">
        Check back later for availability
      </p>
      <p
        id="HoverSubrayar"
        className="ColorCelesteMedioL FontBolder FourthFontOfContent"
      >
        Learn more >
      </p>
      <img
        style={{ width: 890, height: 310, marginTop: 20, marginBottom: 30 }}
        src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FiPadPro.png?alt=media&token=58afd8ff-ad6c-4051-a888-666a245bd055"
      />
    </div>
  );
}
