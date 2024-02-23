import React from "react";
import styles from "../../styles/learnings.module.css";
import { learningContainer } from "@/app/contents/LearningsContent";
import { SectionDescription, SectionName, SectionTitle } from "@/app/components/ButtonComponent";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Image from "next/image";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";

const page = () => {
  const cardData = learningContainer.imageCard;

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionName
          sectionText={learningContainer.sectionName}
          dashText={true}
          textAllign="center"
        />
        <SectionTitle
          sectionText={learningContainer.sectionTitle}
          dashText={true}
          textAllign="center"
          padding="0 !important"
        />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.purpleSquare}></div>
            <div className={styles.imageContainer}>
              <Image
                className=""
                src={data.img}
                alt="Asian Engineer"
                quality={100}
                priority={true}
                unoptimized
                width={100}
                height={100}
              />
            </div>
            <div className={styles.cardContent}>
              <SectionTitle 
                sectionText={data.title}
              />
              <SectionDescription 
                sectionText={data.description}
              />
            </div>
          </div>
        ))}
      </div>

      <ContactBanner />
      <Footer />
    </>
  );
};

export default page;
