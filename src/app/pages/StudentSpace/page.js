import React from "react";
import styles from "../../styles/facilities.module.css";
import styled from "../../styles/studentspace.module.css";
import { SectionName, SectionTitle } from "@/app/components/ButtonComponent";
import ImageCard from "@/app/components/ImageCard";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";
import { studentSpaceData } from "@/app/contents/StudentSpacePageContent";

const page = () => {
  const cardData = studentSpaceData.imageCard;
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionName
          sectionText={studentSpaceData.sectionName}
          textAllign="center"
          dashText={true}
        />
        <SectionTitle
          sectionText={studentSpaceData.sectionTitle}
          textAllign="center"
          padding="0 !important"
        />
        <div className={`${styles.facilitiesCards} ${styled.studentSpaceCards}`}>
          {cardData.map((data, index) => (
            <ImageCard
              key={index}
              img={data.img}
              description={data.cardDesc}
              titleText={data.cardTitle}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </>
  );
};

export default page;
