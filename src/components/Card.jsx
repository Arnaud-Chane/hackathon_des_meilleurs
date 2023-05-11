import { useState } from "react";

export default function Card({ cardFront, cardBack }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""} onClick={handleClick}>
        <img className="card-front" src={cardFront} alt="card front" />
        <button type="button" className="card-back">
          <img src={cardBack} alt="card back" />
        </button>
      </div>
    </div>
  );
}
