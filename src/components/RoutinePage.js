import React, { useState, useEffect } from "react";
import './RoutinePage.css';

function RoutinePage() {
    const initialRoutine = {
        Monday: {morning: "", evening: ""},
        Tuesday: {morning: "", evening: ""},
        Wednesday: {morning: "", evening: ""},
        Thursday: {morning: "", evening: ""},
        Friday: {morning: "", evening: ""},
        Saturday: {morning: "", evening: ""},
        Sunday: {morning: "", evening: ""},
    };
//loading routine from local sstorage on component mout or use inital routine if not in local storsge
const [routine, setRoutine] = useState(
    () => JSON.parse(localStorage.getItem("routine")) || initialRoutine
);

useEffect(() => {
    localStorage.setItem("routine", JSON.stringify(routine));
}, [routine]);


const updateRoutine = (day, time, item) => {
    setRoutine({ ...routine, [day]: {...routine[day], [time]:item} });
};

return (
    <div>
        <h2>Build your Routine</h2>
            <div className="routine-grid">
                {Object.keys(routine).map((day) => (
                    <div className="grid-column" key={day}>
                        <div className="grid-header">{day}</div>
                        {Object.keys(routine[day]).map((time) => (
                            <div key={time} className="grid-cell">
                                <label>{time}</label>
                                <input
                                type="text"
                                value={routine[day][time]}
                                onChange={(e) => updateRoutine(day, time, e.target.value)}
                                />
                            </div>
                            ))}
                        </div>
                     ))}
                </div>
            </div>
        );
    }

export default RoutinePage;