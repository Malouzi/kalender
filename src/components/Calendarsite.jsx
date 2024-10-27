import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';


const Calendarsite = () => {
    const { doorId  } = useParams();
  return (
    <div className="calendarsite" >
            <h1>Kalenderseite für Tür {doorId}</h1>                    
        </div>
    );
  };
  
export default Calendarsite;