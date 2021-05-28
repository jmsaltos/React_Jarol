import React from "react";

export default function ContentPart1() {
  return (
    <div className="Content ColorMoradoClaro CursorPointer">
      <p className="ColorNegroL FirstFontOfContent" style={{ marginTop: 75 }}>
        <b>iPhone 12</b>
      </p>
      <p className="ColorNegroL FontBolder SecondFontOfContent">
        Purple. Now in season.
      </p>
      <p className="ColorNegroL ThirdFontOfContent">Purple coming soon</p>
      <p
        id="HoverSubrayar"
        className="ColorAzulL FontBolder FourthFontOfContent"
      >
        Learn more >
      </p>
      <img
        style={{ width: 980, height: 240, marginTop: 40, marginBottom: 96 }}
        src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FiPhoneMorado.png?alt=media&token=3ebcfff7-572b-4b92-b625-5f927dd19507"
      />
    </div>
  );
}
