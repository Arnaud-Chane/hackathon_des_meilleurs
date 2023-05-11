import { useState } from "react";

export default function Card({ cardFront, cardBack }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""} onClick={handleClick}>
        <img
          className="card-flipped card-front"
          src={cardFront}
          alt="card front"
        />

        <img
          className="card-flipped card-back"
          src={cardBack}
          alt="card back"
        />
      </div>
    </div>
  );
}
