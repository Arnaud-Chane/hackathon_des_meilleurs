import React, { useState } from "react";

function CardSocle({ transform, image, zIndex, index, handleClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="CardSocle"
      style={{ transform: isHovered ? "scale(1.2)" : transform, zIndex }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        className="imageHomePage"
        src={image}
        alt="#"
        onClick={handleClick}
      />
    </div>
  );
}
export default CardSocle;
