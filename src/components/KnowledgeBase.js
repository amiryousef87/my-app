import React from "react";
import PageLayout from "./PageLayout";
import KnowledgeCard from "../components/KnowledgeCard";
import "./KnowledgeBase.css";

const knowledgeItems = [
  {
    image: require("../acsses/1-2.jpg"),
    title: "فصلنامه خبری پایگاه میراث جهانی تخت جمشید...",
    description: "شماره ۲۰ - سال ششم، پاییز ۱۴۰۰",
    year: "۱۴۰۰",
  },
  {
    image: require("../acsses/1-3.jpg"),
    title: "فصلنامه خبری پایگاه میراث جهانی تخت جمشید...",
    description: "شماره ۲۱ - سال ششم، زمستان ۱۴۰۰",
    year: "۱۴۰۰",
  },
  {
    image: require("../acsses/1-4.jpg"),
    title: "ویژه نامه پروفسور علیرضا شاپور شهبازی",
    description: "شماره ویژه نامه - تابستان ۱۳۹۷",
    year: "۱۳۹۷",
  },
  {
    image: require("../acsses/1-5.jpg"),
    title: "",
    description: "شماره ویژه نامه - تابستان ۱۳۹۷",
    year: "۱۳۷",
  },
];

const KnowledgeBase = () => (
  <PageLayout title="پایگاه دانش">
    <div className="knowledge-base">
      <div className="knowledge-base-header">
        <h1>پایگاه دانش</h1>
        <div className="categories">
          <button>کتاب ها</button>
          <button>ویدیو ها</button>
          <button>گالری تصاویر</button>
          <button>مقاله ها</button>
          <button className="active">نشریه</button>
        </div>
      </div>
      <div className="knowledge-grid">
        {knowledgeItems.map((item, index) => (
          <KnowledgeCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            year={item.year}
          />
        ))}
      </div>
      <button className="load-more">بیشتر ←</button>
    </div>
  </PageLayout>
);

export default KnowledgeBase;
