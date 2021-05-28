import React from "react";

export default function ContentFooter() {
  //Listas con los items para el footer
  const learn = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Music",
    "AirPods",
    "iPod",
    "touch",
  ];
  const learnList = learn.map((learn) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {learn}
    </lu>
  ));
  const services = [
    "Apple Music",
    "Apple TV+",
    "Apple Arcade",
    "iCloud",
    "Apple One",
    "Apple Books",
    "App Store",
  ];
  const servicesList = services.map((services) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {services}
    </lu>
  ));
  const account = ["Manage Your Apple ID", "iCloud.com"];
  const accountList = account.map((account) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {account}
    </lu>
  ));
  const forBussiness = ["Apple and Bussiness"];
  const forBussinessList = forBussiness.map((forBussiness) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {forBussiness}
    </lu>
  ));
  const appleValues = ["Accesibility", "Environment", "Privacy"];
  const appleValuesList = appleValues.map((appleValues) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {appleValues}
    </lu>
  ));
  const aboutApple = [
    "Job Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
  ];
  const aboutAppleList = aboutApple.map((aboutApple) => (
    <lu id="HoverSubrayar" className="HeightFinalList CursorPointer">
      {aboutApple}
    </lu>
  ));
  return (
    <div className="ContentFinal ColorGrisMedio">
      <div className="MargenFinal">
        <p>
          1. New subscribers only. $9.99/month after free trial. No commitment.
          Plan automatically renews after trial until cancelled.
        </p>
        <p>
          2. The Apple One free trial includes only services that you are not
          currently using through a free trial or a subscription. Plan
          automatically renews after trial until cancelled. Restrictions and
          other terms apply.
        </p>
        <p>
          3. Apple TV+ is $4.99/month after free trial. One subscription per
          Family Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply. Prices are quoted in US Dollars and may vary by
          country. An international credit card is required to complete the
          subscription.
        </p>
        <hr className="SeparadorFinal"></hr>
      </div>
      <div className="ContentHorizontal MargenFinal">
        <div className="ContentFinal2">
          <p>
            <b>Learn</b>
          </p>
          <lu>{learnList}</lu>
        </div>
        <div className="ContentFinal2">
          <p>
            <b>Services</b>
          </p>
          <lu>{servicesList}</lu>
          <p style={{ marginTop: 10 }}>
            <b>Account</b>
          </p>
          <lu>{accountList}</lu>
        </div>
        <div className="ContentFinal2">
          <p>
            <b>For Business</b>
          </p>
          <lu>{forBussinessList}</lu>
        </div>
        <div className="ContentFinal2">
          <p>
            <b>Apple Values</b>
          </p>
          <lu>{appleValuesList}</lu>
          <p style={{ marginTop: 30 }}>
            <b>About Apple</b>
          </p>
          <lu>{aboutAppleList}</lu>
        </div>
      </div>
      <div className="MargenFinal">
        <div className="ContentHorizontal" style={{ marginTop: 30 }}>
          <p
            id="HoverSubrayar"
            className="CursorPointer"
            style={{ color: "#0356b4", fontWeight: 500 }}
          >
            Find a retailer
          </p>
          <p style={{ marginLeft: 1 }}>near you.</p>
        </div>
        <hr className="SeparadorFinal" style={{ marginTop: -5 }}></hr>
        <div className="ContentHorizontal" style={{ marginTop: -5 }}>
          <p>Copyright © 2021 Apple Inc. All rights reserved.</p>
          <div className="ContentHorizontal" style={{ marginLeft: 30 }}>
            <p
              id="HoverSubrayar"
              className="CursorPointer"
              style={{ marginLeft: 10 }}
            >
              Privacy Policy
            </p>
            <hr
              className="SeparadorFinal"
              style={{ height: 15, marginTop: 15, marginLeft: 10 }}
            ></hr>
            <p
              id="HoverSubrayar"
              id="HoverSubrayar"
              className="CursorPointer"
              style={{ marginLeft: 10 }}
            >
              Legal
            </p>
            <hr
              className="SeparadorFinal"
              style={{ height: 15, marginTop: 15, marginLeft: 10 }}
            ></hr>
            <p
              id="HoverSubrayar"
              className="CursorPointer"
              style={{ marginLeft: 10 }}
            >
              Site Map
            </p>
          </div>
          <div className="ContentHorizontal" style={{ marginLeft: 170 }}>
            <p
              id="HoverSubrayar"
              className="CursorPointer"
              style={{ marginLeft: 10 }}
            >
              Latin America and the Caribbean{" "}
            </p>
            <hr
              className="SeparadorFinal"
              style={{ height: 15, marginTop: 15, marginLeft: 10 }}
            ></hr>
            <p
              id="HoverSubrayar"
              className="CursorPointer"
              style={{ marginLeft: 10 }}
            >
              Español
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
