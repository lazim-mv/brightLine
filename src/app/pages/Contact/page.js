"use client";
import React, { useState } from "react";
import styles from "../../styles/contact.module.css";
import MobileHeader from "@/app/components/MobileHeader";
import Header from "@/app/components/Header";
import map from "../../../../public/ContactPage/map.png";
import pin from "../../../../public/ContactPage/locationPin.png";
import {
  BtnComponent,
  SectionName,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Image from "next/image";
import Footer from "@/app/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can customize this part to send the form data to your server or perform any other action
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionName
          sectionText="CONTACT US"
          dashText={true}
          textAllign="center"
        />
        <SectionTitle
          sectionText="New strategies that lead"
          textAllign="center"
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.hImage}
            src={map}
            alt="Asian Engineer"
            quality={100}
            priority={true}
            unoptimized
          />
          <Image
            className={styles.pinImage}
            src={pin}
            alt="Asian Engineer"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name" className={styles.one}>
              Full name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="Mobile">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Your Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <label htmlFor="Subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <label htmlFor="Message">Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleChange}
            />
            <a href="#" onClick={handleSubmit}>
              <BtnComponent
                buttonText="Contact Now"
                bg="#5A1E90"
                width="14.285714285714285vw"
                color="#fff"
                
              />
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
