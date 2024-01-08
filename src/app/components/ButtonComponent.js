import Image from "next/image";
import React from "react";

const BtnComponent = ({
  borderColor,
  bg,
  color,
  width,
  buttonText,
  margin,
  arrow,
  h5Margin,
  arrowColor,
}) => {
  return (
    <div
      className={`btnContainer${arrow ? " btnFill" : ""}`}
      style={{
        border: "0.10416666666666667vw solid " + borderColor,
        background: bg,
        color: color,
        width: width ? width : "12.630208333333334vw",
        margin: margin,
      }}
    >
      <div className="visibleWrapperContainer">
        <div className="topVisibleContainer buttonText">
          <h5
            className="buttonText"
            style={{
              margin: h5Margin ? h5Margin : "0 0.6510416666666667vw 0 0",
            }}
          >
            {buttonText}
          </h5>
          {arrow ? (
            <Image
              className="rightArrow"
              src="/rightArrow.svg"
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              style={{
                filter: arrowColor ? "brightness(1000%)" : "",
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="bottomVisibleContainer buttonText">
          <h5
            className="buttonText"
            style={{
              margin: h5Margin ? h5Margin : "0 0.6510416666666667vw 0 0",
            }}
          >
            {buttonText}
          </h5>
          {arrow ? (
            <Image
              className="rightArrow"
              src="/rightArrow.svg"
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              style={{
                filter: arrowColor ? "brightness(1000%)" : "",
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

const SectionName = ({
  sectionText,
  color,
  weight,
  padding,
  dashText,
  textAllign,
}) => {
  const hyphen = String.fromCharCode(8212);
  return (
    <h4
      style={{
        color: color ? color : "#5A1E90",
        fontWeight: weight,
        padding: padding ? padding : "0 0 1.3020833333333335vw 0",
        textAlign: textAllign,
      }}
    >
      {hyphen}&nbsp;&nbsp;{sectionText}
      {dashText ? " " + hyphen : ""}
    </h4>
  );
};

const SectionTitle = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
}) => {
  return (
    <h2
      style={{
        color: color,
        fontWeight: weight,
        padding: padding ? padding : "0  0 0.6510416666666667vw 0",
        width: width,
        textAlign: textAllign,
      }}
    >
      {sectionText}
    </h2>
  );
};

const SectionDescription = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
}) => {
  return (
    <p
      style={{
        color: color,
        fontWeight: weight,
        paddingBottom: padding,
        width: width,
        textAlign: textAllign,
      }}
    >
      {sectionText}
    </p>
  );
};

export { BtnComponent, SectionTitle, SectionName, SectionDescription };
