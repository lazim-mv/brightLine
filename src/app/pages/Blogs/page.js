import React from "react";
import styles from "../../styles/blogspage.module.css";
import {
  SectionName,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import ImageCard from "@/app/components/ImageCard";
import Header from "@/app/components/Header";
import { blogsPageData } from "@/app/contents/BlogsPageContent";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";
import MobileHeader from "@/app/components/MobileHeader";

const page = () => {
  const cardData = blogsPageData.imageCard;
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={`${styles.blogsPageContainer} container8`}>
        <div className="blogsContentContainer">
          <SectionName
            sectionText={blogsPageData.sectionName}
            dashText={true}
            textAllign="center"
            weight="700"
          />
          <SectionTitle
            sectionText={blogsPageData.sectionTitle}
            color="#282938"
            width="41.53645833333333vw"
            textAllign="center"
            padding="0 !important"
          />
        </div>
        <div className={`${styles.blogsPagecarousel} carousel`}>
          {cardData.map((data, index) => (
            <ImageCard
              key={index}
              // currentIndex={currentIndex}
              img={data.img}
              titleText={data.cardTitle}
              description={data.cardDate}
              carousel={true}
              extraContent={true}
              blogCard={true}
              blogDesc={data.cardDesc}
              className="blogsPage"
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
