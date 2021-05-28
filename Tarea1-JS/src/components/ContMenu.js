import React from "react";

export default function ContMenu() {
  const nombres = [
    <img
      style={{ width: 20, height: 20 }}
      src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2Flogotipo-de-mac-os.png?alt=media&token=bdd9ff84-50d6-477d-ad35-501298573fa9"
    ></img>,
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Music",
    "Where to buy",
    <img      
      style={{ width: 15, height: 15 }}
      src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2Flupa.png?alt=media&token=7549e4f9-c5e6-427a-8821-627ac62db96b"
    ></img>,
  ];
  const listItems = nombres.map((nombre) => (
    <lu className="textoMenu CursorPointer">{nombre}</lu>
  ));
  return (
    <div className="MenuBar">
      <lu>{listItems}</lu>
    </div>
  );
}
