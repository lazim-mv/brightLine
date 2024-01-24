import React from "react";
import styles from "../../styles/aboutus.module.css";
import {
  aboutPageContainer1,
  aboutPageContainer2,
  aboutPageContainer3,
  aboutPageContainer4,
  aboutPageContainer5,
} from "@/app/contents/AboutPageContent";
import Image from "next/image";
import {
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Header from "@/app/components/Header";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";
import MobileHeader from "@/app/components/MobileHeader";

const page = () => {
  const cardData = aboutPageContainer2.imageCard;
  return (
    <>
      <Header />
      <MobileHeader />

      <div className={styles.mainContainer1}>
        <div className={styles.container1}>
          <SectionName
            sectionText={aboutPageContainer1.sectionName}
            dashText={true}
            textAllign="center"
          />
          <SectionTitle
            sectionText={aboutPageContainer1.sectionTitle}
            textAllign="center"
          />
          <SectionDescription
            sectionText={aboutPageContainer1.description}
            textAllign="center"
            width="65.88541666666666vw"
            margin="0 auto"
          />
          <div className={styles.aboutBannerImageContainer}>
            <Image
              className=""
              src={aboutPageContainer1.img}
              alt="Asian Engineer"
              quality={100}
              priority={true}
              unoptimized
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className={styles.container2}>
          <SectionTitle
            sectionText={aboutPageContainer2.sectionTitle}
            textAllign="center"
            width="60.611979166666664vw"
          />
          <div className={styles.cardContainer}>
            {cardData.map((data, index) => (
              <div
                className={`${styles[`aboutItem${index + 1}`]} ${
                  styles.aboutItem
                }`}
                key={index}
              >
                <div className={styles.aboutImage}>
                  <Image
                    className="cardIcon"
                    src={data.img}
                    alt="Asian Engineer"
                    width={100}
                    height={100}
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                </div>
                <div className={styles.container2Contents}>
                  <h3>{data.title}</h3>
                  <SectionDescription sectionText={data.description} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container3}>
          <div className={styles.vissionMissionContainer}>
            <div className={styles.mission}>
              <div>
                <Image
                  className={styles.vissionMissionImage}
                  src={aboutPageContainer3[0].img}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
              <div className={styles.vissionMissionContent}>
                <SectionTitle sectionText={aboutPageContainer3[0].title} />
                <SectionDescription
                  sectionText={aboutPageContainer3[0].description}
                />
              </div>
            </div>
            <div className={styles.vission}>
              <div className={styles.vissionMissionContent}>
                <SectionTitle sectionText={aboutPageContainer3[1].title} />
                <SectionDescription
                  sectionText={aboutPageContainer3[1].description}
                />
              </div>
              <div>
                <Image
                  className={styles.vissionMissionImage}
                  src={aboutPageContainer3[1].img}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container4}>
          <SectionTitle
            sectionText={aboutPageContainer4.sectionTitle}
            textAllign="center"
          />
          <div className={styles.profilesContainer}>
            {aboutPageContainer4.imageCard.map((data, index) => (
              <div className={styles.profileContainer} key={index}>
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
                <h3>{data.name}</h3>
                <SectionDescription
                  sectionText={data.position}
                  textAllign="center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container5}>
          <SectionTitle
            sectionText={aboutPageContainer5.sectionTitle}
            textAllign="center"
          />
          <div className={styles.faculties}>
            {aboutPageContainer5.imageCard.map((data, index) => (
              <div className={styles.faculty} key={index}>
                <h3>{data.name}</h3>
                <SectionDescription sectionText={data.position} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </>
  );
};

export default page;
