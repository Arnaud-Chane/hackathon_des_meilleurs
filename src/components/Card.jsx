import { useState } from "react";

export default function Card({ cardFront, cardBack, title }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""} onClick={handleClick}>
        <img className="card-front" src={cardFront} alt="card front" />
        <div className="img-with-hover-text">
          <img className="card-back" src={cardBack} alt="card back" />
          <div className="hover-text">{title}</div>
        </div>
      </div>
    </div>
  );
}
