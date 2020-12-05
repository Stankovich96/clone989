import React from "react";

export const FeatureAttribute = (props) => {
  const { icon, header, text } = props.dataList;

  return (
    <div className="feature-attribute">
      <div className="feature__icon">{icon}</div>
      <h4 className="feature__header">{header}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};
