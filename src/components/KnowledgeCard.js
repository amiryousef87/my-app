import React from "react";

const KnowledgeCard = ({ image, title, description, year }) => (
  <div className="knowledge-card">
    <img src={image} alt={title} className="knowledge-card-image" />
    <div className="knowledge-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{year}</span>
    </div>
  </div>
);

export default KnowledgeCard;
