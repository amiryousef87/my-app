import React, { useState } from "react";
import PageLayout from "../components/PageLayout";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
       
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

 
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <PageLayout title="اطلاعات مکان">
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>درباره پروژه</h2>
        <p>
          این پروژه با هدف معرفی آثار تاریخی تخت جمشید و ارائه اطلاعات بیشتر در
          مورد این مکان‌های باستانی توسعه یافته است. برای مشاهده توضیحات بیشتر،
          روی حرف{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={toggleModal}
          >
            A
          </span>{" "}
          کلیک کنید.
        </p>

        
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <h3>توضیحات اضافی</h3>
          <p>
            این پروژه به منظور نمایش تاریخ و فرهنگ غنی تخت جمشید طراحی شده است.
          </p>
        </Modal>
      </div>
    </PageLayout>
  );
};

export default About;
