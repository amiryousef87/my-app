import React from "react";

const ArtifactCard = ({ image, title, description }) => (
  <div className="artifact-card">
    <img src={image} alt={title} className="artifact-image" />
    <div className="artifact-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ArtifactCard;
