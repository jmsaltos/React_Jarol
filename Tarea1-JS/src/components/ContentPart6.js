import React from "react";

export default function ContentPart6() {
  return (
    <div className="Content2" style={{ height: 600 }}>
      <div className="Content2Col ColorGrisClaro MargenIzqContent2Col CursorPointer">
        <p style={{ fontSize: 42, fontWeight: 500, marginTop: 27 }}>
          <img
            style={{ width: 30, height: 30 }}
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FlogoAppleBlack.png?alt=media&token=aa2f8448-bf11-4ef1-9aa3-6195be4175d8"
          />
          One
        </p>
        <p className="FontBolder" style={{ fontSize: 20, marginTop: -40 }}>
          Bundle up to four Apple Services.
        </p>
        <p style={{ fontSize: 20, marginTop: -20 }}>And enjoy more for less.</p>
        <div className="ContentHorizontal">
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
            style={{
              fontSize: 18,
              marginTop: -10,
              marginLeft: 15,
              marginBottom: 100,
            }}
          >
            Try it free²↗
          </p>
        </div>
        <div className="ContentHorizontal">
          <img
            className="ShadowIcon"
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FIconAppleMusic.png?alt=media&token=52b6e846-944e-4855-a749-fea144bf005c"
          />
          <img
            className="ShadowIcon"
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FIconAppleTv.png?alt=media&token=70050de9-6d1f-4536-a46e-c809b022e6fa"
          />
        </div>
        <div className="ContentHorizontal">
          <img
            className="ShadowIcon"
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FIconAppleArcade.png?alt=media&token=3a3528f2-9b8a-446a-86ea-6ed17f4cc67e"
          />
          <img
            className="ShadowIcon"
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FIconAppleCloud.png?alt=media&token=9fd30cdd-b188-426d-ae19-8609886b297f"
          />
        </div>
      </div>
      <div className="Content2Col MargenDerContent2Col CursorPointer">
        <img
        className="TamImg"
          src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FAppleTV.png?alt=media&token=4434d7db-3be3-4c09-a6d3-03dd43f56ee2"
        ></img>
        <p
          className="TextoSobreImagen"
          style={{ fontSize: 39, fontWeight: 400, marginTop: 400}}
        >
          <img
            style={{ width: 28, height: 28 }}
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-icodetech.appspot.com/o/Iconos%2FlogotAppleWhite.png?alt=media&token=3cd960cd-9331-46ad-956e-060aeba652ae"
          />
          tv+
        </p>
        <p
          className="TextoSobreImagen"
          style={{
            fontSize: 20,
            fontWeight: 380,
            marginTop: 450,
            marginLeft: 310,
            marginRight: 310,
          }}
        >
          Get 1 year of Apple TV+ free when you buy an Apple device.³
        </p>
        <div
          className="TextoSobreImagen "
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 510,
            marginBottom: -100,
          }}
        >
          <p
            id="HoverSubrayar"
            style={{ fontSize: 18, marginRight: 10, fontWeight: 500 }}
          >
            Learn more >
          </p>
          <p
            id="HoverSubrayar"
            style={{ fontSize: 18, marginLeft: 10, fontWeight: 500 }}
          >
            Try it free ↗
          </p>
        </div>
      </div>
    </div>
  );
}
