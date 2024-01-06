import Image from "next/image";
import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="cardContainer">
      <Image
        className="cardIcon"
        src={img}
        alt="Asian Engineer"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
      />
      <div className="cardContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
