import React from "react";
import styles from "../../styles/facilities.module.css";
import { SectionName, SectionTitle } from "@/app/components/ButtonComponent";
import { facilitesData } from "@/app/contents/Facilities";
import ImageCard from "@/app/components/ImageCard";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";

const page = () => {
  const cardData = facilitesData.imageCard;
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionName
          sectionText={facilitesData.sectionName}
          textAllign="center"
        />
        <SectionTitle
          sectionText={facilitesData.sectionTitle}
          textAllign="center"
        />
        <div className={styles.facilitiesCards}>
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

      <ul className={styles.ull}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </>
  );
};

export default page;
