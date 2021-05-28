import React from "react";

export default function ContentPart4() {
  return (
    <div className="Content2">
      <div className="Content2Col ColorNegro MargenIzqContent2Col CursorPointer">
        <p className="ColorBlancoL" style={{ fontSize: 40, marginTop: 45 }}>
          <b>iPhone 12 Pro</b>
        </p>
        <p
          className="FontBolder ColorBlancoL"
          style={{ fontSize: 25, marginTop: -40 }}
        >
          it's a leap year.
        </p>
        <p
          id="HoverSubrayar"
          className="FontBolder ColorCelesteMedioL"
          style={{ fontSize: 18, marginTop: -10 }}
        >
          Learn more >
        </p>
        <img
          //style={{ width: 275, height: 350, marginTop: 61, marginBottom: 0 }}
          style={{ width: 275, height: 350,  marginTop: 60 , marginBottom: 0}}

          src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FiPhone12Pro.png?alt=media&token=1c2f9aa9-b389-4a1b-80d9-ff1234f90e04"
        />
      </div>
      <div className="Content2Col ColorNegro MargenDerContent2Col CursorPointer">
        <p
          className="FontBolder ColorBlancoL"
          style={{ fontSize: 30, marginTop: 45 }}
        >
          <img
            style={{ width: 28, height: 28 }}
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FlogotAppleWhite.png?alt=media&token=3cd960cd-9331-46ad-956e-060aeba652ae"
          />
          WATCH
        </p>
        <p
          className="FontBolder ColorRojoL"
          style={{ fontSize: 14, marginTop: -30 }}
        >
          SERIES 6
        </p>
        <p
          className="FontBolder ColorBlancoL"
          style={{ fontSize: 20, marginTop: -10 }}
        >
          The future of health is on your wrist.
        </p>
        <p
          id="HoverSubrayar"
          className="FontBolder ColorCelesteMedioL"
          style={{ fontSize: 18, marginTop: -10 }}
        >
          Learn more >
        </p>
        <img
          style={{ width: 270, height: 300, marginTop: 50, marginBottom: 30 }}
          src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FiWatch.png?alt=media&token=0a195201-7c5a-4d51-a3e7-4fce336e159c"
        />
      </div>
    </div>
  );
}
