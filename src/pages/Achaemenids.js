import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import ArtifactCard from "../components/ArtifactCard";
import "./Achaemenids.css";

const artifacts = [
  {
    image: require("../acsses/img/3-1.jpg"),
    title: "پنجه شیر",
    description: "این پنجه بازمانده یک سرستون بزرگ شیر است.",
  },
  {
    image: require("../acsses/img/4-1.jpg"),
    title: "ظرف سفالی",
    description:
      "ظرف سفالی با نقوش هندسی و حیوانی. این ظرف سه‌پایه مربوط به هزاره دوم پیش از میلاد فرهنگ شُغا-تیموران است.",
  },
  {
    image: require("../acsses/img/5-1.jpg"),
    title: "سردیس خشایارشا",
    description:
      "سردیس خشایارشا از مرمر سیاه ساخته شده و به دلیل ریش، کلاه و گوشواره‌ای که دارد به خشایارشاه نسبت داده شده است. خشایارشا پسر داریوش یکی از سرشناس‌ترین فرمانروایان ایران در متون تاریخی است.",
  },
  {
    image: require("../acsses/img/6-1.jpg"),
    title: "هاون سنگی",
    description:
      "هاون‌های سنگی با خط آرامی از سنگ یشم. تعداد ۲۶۹ قطعه سنگی در ساختمان موسوم به خزانه تخت جمشید کشف شدند که حدود ۲۰۳ عدد از آن‌ها دارای متون آرامی نوشته‌شده با جوهر هستند. ماهیت این متون اداری است، و محتوای آن‌ها نشان می‌دهد که در منطقه‌ باستانی آرخوزیا ساخته شده‌اند.",
  },
  {
    image: require("../acsses/img/9-1.jpg"),
    title: "قرقره مفرغی",
    description:
      "هخامنشیان از قرقره‌های مرکب به منظور جابه‌جایی و استقرار سنگ‌های بزرگ استفاده مي‌کرده‌اند که این خود نشان از دانش مهندسی آن روزگار دارد.",
  },
  {
    image: require("../acsses/img/10-1.jpg"),
    title: "شالستون حاوی کتیبه خشایارشا",
    description: "شالستون سنگی از خشایارشا، فرزندداریوش نخست",
  },
  {
    image: require("../acsses/img/11-1.jpg"),
    title: "زیور آلات با سنگ‌های قیمتی",
    description:
      "زیورآلات با سنگ‌های قیمتی . دوره: هخامنشی . محل کشف: تخت جمشید ",
  },
  {
    image: require("../acsses/img/20-1.jpg"),
    title: "تندیس پنه‌لوپه",
    description:
      "پیکره مرمرین یونانی از بانویی نشسته. این پیکره در تالار خزانه، یافت شد؛ در حالی که به شدت آسیب دیده و خرد شده و بدن شکسته آن در راهروی شماره ۳۱ به پشت افتاده و مفقود شده بود. تنها تکه کوچکی از دست راست پیکره در کاوش های بعد اندکی دورتر، در گوشه شمال شرقی تالار ۳۸ خزانه یافت شد.",
  },
  {
    image: require("../acsses/img/21-1.jpg"),
    title: "کتیبه زرین داریوش",
    description:
      "کتیبه زرین سه‌زبانه (فارسی باستان، عیلامی و بابلی) داریوش از کاخ آپادانا به‌دست آمده است. محتوای این کتیبه شرحی است بر سرزمین‌هایی که شاه بزرگ هخامنشی بر آنها فرمانروایی دارد. در پایان این کتیبه داریوش از اهوره‌مزدا، برای خود و خانواده‌اش طلب یاری کرده است. ",
  },
];

const Achaemenids = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artifacts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artifacts.length) % artifacts.length
    );
  };

  return (
    <PageLayout title="آثار هخامنشی">
      <div className="achaemenids-gallery">
        <h1>آثار هخامنشی</h1>
        <div className="artifact-row">
          {artifacts.map((artifact, index) => (
            <img
              key={index}
              src={artifact.image}
              alt={artifact.title}
              className="artifact-thumbnail"
              style={{ opacity: index === currentIndex ? 1 : 0.5 }}
            />
          ))}
        </div>
        <div className="artifact-details">
          <button onClick={handlePrevious}>←</button>
          <div>
            <h3>{artifacts[currentIndex].title}</h3>
            <p>{artifacts[currentIndex].description}</p>
          </div>
          <button onClick={handleNext}>→</button>
        </div>
        <button className="load-more">آثار بیشتر ←</button>
      </div>
    </PageLayout>
  );
};

export default Achaemenids;
