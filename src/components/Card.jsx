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
        <img
          className="card-back"
          title={title}
          src={cardBack}
          alt="card back"
        />
      </div>
    </div>
  );
}
