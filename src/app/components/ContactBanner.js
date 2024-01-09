import React from "react";
import { container9Data } from "../Contents";
import Image from "next/image";
import vector from "../../../public/Container9/1.png";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";

const ContactBanner = () => {
  return (
    <div className="container9">
      <div className="container9Contact">
        <Image
          className="hImage"
          src={vector}
          alt="Asian Engineer"
          quality={100}
          priority={true}
          unoptimized
        />
        <div className=" container9Content absolute">
        <SectionName 
            sectionText={container9Data.sectionName}
            dashText={true}
            color="#fff"
            textAllign="center"
        />
          <SectionTitle
            sectionText={container9Data.sectionTitle}
            color="#fff"
            textAllign="center"
            padding="0 0 1.3020833333333335vw 0"
            // width="44.40104166666667vw"
          />
          <SectionDescription
            sectionText={container9Data.description}
            color="#fff"
            padding="1.953125vw"
            width="38.15104166666667vw"
            textAllign="center"
          />
          <BtnComponent
            arrow={true}
            bg="transparrent"
            color="#fff"
            buttonText={container9Data.buttonText}
            width="12.630208333333334vw"
            margin="0 auto"
            borderColor="#fff"
            arrowColor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
