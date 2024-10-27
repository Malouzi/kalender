import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Calendar = () => {
  const [flippedDoors, setFlippedDoors] = useState(Array(24).fill(false));
  const navigate = useNavigate();

  const handleFlip = (index) => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    if (dayOfMonth >= index + 1) {
      const newFlippedDoors = [...flippedDoors];
      newFlippedDoors[index] = !newFlippedDoors[index];
      setFlippedDoors(newFlippedDoors);
      navigate(`/calendarsite/${index + 1}`);
    }
  };

  return (
    <div className="calendar">
      {Array.from({ length: 24 }, (_, door) => (
        <div
          key={door}
          onClick={(e) => {
            e.preventDefault();
            handleFlip(door);
          }}
          className={`door ${flippedDoors[door] ? 'flipped' : ''}`}
        >
          <img src={`/images/${door + 1}.png`} alt={`Door ${door + 1}`} />
          <div className="door-number">{door + 1}</div>
          <div className="back red">Open</div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
