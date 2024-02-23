import React from "react";
import styles from "../../styles/schoolevents.module.css";
import { SectionName, SectionTitle } from "@/app/components/ButtonComponent";
import ImageCard from "@/app/components/ImageCard";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";
import { schoolEventsData } from "@/app/contents/SchoolEventsPageContent";

const page = () => {
  const cardData = schoolEventsData.imageCard;
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={`${styles.container1} container8`}>
        <SectionName
          sectionText={schoolEventsData.sectionName}
          textAllign="center"
          dashText={true}
        />
        <SectionTitle
          sectionText={schoolEventsData.sectionTitle}
          textAllign="center"
          padding="0 !important"
        />
        <div className={styles.schoolEvents}>
        {cardData.map((data, index) => (
              <ImageCard
                key={index}
                // currentIndex={currentIndex}
                img={data.img}
                titleText={data.cardTitle}
                description={data.cardDate}
                carousel={true}
                extraContent={true}
                className="schoolEvents"
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
