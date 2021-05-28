import React from "react";

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="large-img" />
    </div>
  );
};
