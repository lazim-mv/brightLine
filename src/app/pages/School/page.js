import React from "react";
import styles from "../../styles/school.module.css";
import MobileHeader from "@/app/components/MobileHeader";
import { schoolData } from "@/app/contents/SchoolContents";
import Header from "@/app/components/Header";
import {
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import ContactBanner from "@/app/components/ContactBanner";
import Footer from "@/app/components/Footer";

const page = () => {
  const admission = schoolData.admission[0];
  const rulesAndDiscipline = schoolData.rulesAndDiscipline;
  const scholasticActivities = schoolData.scholasticActivities;
  const discipline = schoolData.discipline;
  const scholasticArea = schoolData.scholasticArea;
  const schoolTime = schoolData.schoolTime;
  const schoolHoliday = schoolData.schoolHoliday;

  return (
    <>
      <Header />
      <MobileHeader />
      {/* Adminssion */}
      <div className={styles.admission}>
        <SectionTitle
          sectionText={admission.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={admission.firstPara}
          padding="0.6613756613756614vw"
        />
        <SectionDescription sectionText={admission.secondPara} />
        <div className={`${styles.pointsContianer} ${styles.one}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={admission.point1} />
        </div>
        <div className={`${styles.pointsContianer} ${styles.two}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={admission.point2} />
        </div>
        <div className={`${styles.pointsContianer} ${styles.three}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={admission.point3} />
        </div>

        <div className={styles.bgContainer}>
          <h4>{admission.sectionName}</h4>
          <div className={styles.gradesPoints}>
            <div className={`${styles.pointsContianer} ${styles.one}`}>
              <div className={styles.point}></div>
              <SectionDescription sectionText={admission.gradePoint1} />
            </div>
            <div className={`${styles.pointsContianer} ${styles.two}`}>
              <div className={styles.point}></div>
              <SectionDescription sectionText={admission.gradePoint2} />
            </div>
            <div className={`${styles.pointsContianer} ${styles.three}`}>
              <div className={styles.point}></div>
              <SectionDescription sectionText={admission.gradePoint3} />
            </div>
            <div className={`${styles.pointsContianer} ${styles.four}`}>
              <div className={styles.point}></div>
              <SectionDescription sectionText={admission.gradePoint4} />
            </div>
          </div>
        </div>
      </div>

      {/* Rules And Descipline */}
      <div className={styles.rulesAndDiscipline}>
        <SectionTitle
          sectionText={rulesAndDiscipline.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <div className={styles.disciplinePoints}>
          {rulesAndDiscipline.arr.map((data, index) => (
            <div
              key={index}
              className={`${styles.pointsContianer} ${styles.one}`}
            >
              <div className={styles.point}></div>
              <SectionDescription
                sectionText={data}
                width="30.82010582010582vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scholastic Activities */}
      <div className={styles.scholasticActivities}>
        <SectionTitle
          sectionText={scholasticActivities.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={scholasticActivities.description}
          padding="0.6613756613756614vw"
        />
        <div className={`${styles.pointsContianer} ${styles.one}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={scholasticActivities.point1} />
        </div>
        <div className={`${styles.pointsContianer} ${styles.two}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={scholasticActivities.point2} />
        </div>
        <div className={`${styles.pointsContianer} ${styles.three}`}>
          <div className={styles.point}></div>
          <SectionDescription sectionText={scholasticActivities.point3} />
        </div>
      </div>

      {/* discipline  */}
      <div className={styles.discipline}>
        <SectionTitle
          sectionText={discipline.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={discipline.description}
          padding="0.6613756613756614vw"
        />
      </div>

      {/* Scholastic Area  */}
      <div className={styles.discipline}>
        <SectionTitle
          sectionText={scholasticArea.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={scholasticArea.description}
          padding="0.6613756613756614vw"
        />
      </div>

      {/* schoolTime  */}
      <div className={styles.discipline}>
        <SectionTitle
          sectionText={schoolTime.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={schoolTime.description}
          padding="0.6613756613756614vw"
        />
      </div>

      {/* schoolHoliday  */}
      <div className={styles.discipline}>
        <SectionTitle
          sectionText={schoolHoliday.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={schoolHoliday.description}
          padding="0.6613756613756614vw"
        />
      </div>

      <ContactBanner />
      <Footer />
    </>
  );
};

export default page;
