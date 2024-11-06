import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import "./Knowledge.css";

const knowledgeItems = [
  {
    title: "بنیان نهادن تخت جمشید",
    moreInfo:
      "این اثر باستانی را داریوش اول هخامنشی ۵۲۱ - ۴۸۵ ق. م.) بنیان نهاد و جانشینان وی در تکمیل و گسترش آن کوشیدند تاریخ بنیان گذاری صفه تخت جمشید را بعضی ۵۲۰ ق. م. و برخی ۵۱۸ ق. م ذکر کرده اند",
    image: require("../acsses/1.jpg"),
  },
  {
    title: "نام گذاری تخت جمشید",
    moreInfo:
      "به استناد متن کتیبه سنگ بنای تخت جمشید و سنگ نوشته خشایار شاه ۴۸۵ - ۴۶۵ ق. م. بر پیشانی دروازه ملل هخامنشیان به تبعیت از نام سرزمینشان پارس آن را «پارسه» نامیده اند",
    image: require("../acsses/2.jpg"),
  },
  {
    title: "مواد و مصالح به کار گرفته شده در بنا",
    moreInfo:
      "در ساختن ارگ ،پارسه چند نوع مصالح به کار برده اند: خشت بزرگ (۳۳×۳۳×۱۲ سانتی متر) آجر و آجر لعابدار ملات ،قیر اندود گچی که رنگی بوده و برای پوشاندن کف یا تزئین ستونهای چوبی به کار می رفته است.",
    image: require("../acsses/3.jpg"),
  },
  {
    title: "تصرف و تخریب",
    moreInfo:
      "تصرف و تخریب پارسه در بهار ۳۳۱ ق. م. از مهمترین فصول تاریخ اسکندر مقدونی است. شواهد باستان شناسی نشان داده که بناهای روی صفحه بعضی از ساختمانهای برزن جنوبی دچار حریق شده و سوخته اند.",
    image: require("../acsses/4.jpg"),
  },
  {
    title: "امور اداری",
    moreInfo:
      "نظام اداری متمرکز در تخت جمشید بر حوزه ای نظارت داشت که از رامهرمز یا بهبهان تا نیریز امتداد داشته و نظام اقتصادی پیچیده ای را اداره میکرد که امور ده ها هزار کارگر وابسته را مدیریت می نمود ",
    image: require("../acsses/5.jpg"),
  },
  {
    title: "کارگران شاغل در تخت جمشید",
    moreInfo:
      "اغلب کاری که در سازمان تخت جمشید تدارک دیده میشد نیاز به نیروی کار فراوانی دارد.",
    image: require("../acsses/6.jpg"),
  },
];

const Knowledge = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % knowledgeItems.length);
    setShowMore(false);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + knowledgeItems.length) % knowledgeItems.length
    );
    setShowMore(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const { title, description, moreInfo, image } = knowledgeItems[currentIndex];

  return (
    <PageLayout title="دانستنی‌ها">
      <div className="knowledge-container">
        <div className="knowledge-content">
          <div className="knowledge-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={toggleShowMore} className="more-info-button">
              {showMore ? "پنهان کردن" : "اطلاعات بیشتر"}
            </button>
            {showMore && <p className="more-info-text">{moreInfo}</p>}
          </div>
          {!showMore && (
            <div
              className="knowledge-image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevious}>←</button>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Knowledge;
