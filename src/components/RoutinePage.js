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
            <h1>Build your Routine</h1>
            <p>Everyone's skin is different and so is there schedule, build a schedule with your favorite ingreients/products below!</p>

            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Morning</th>
                        <th>Evening</th>
                    </tr>
                </thead>
            <tbody>
        {Object.keys(routine).map((day) => (
            <tr key={day}>
                <td>{day}</td>
                    {Object.keys(routine[day]).map((time) => (
                        <td key={time}>
                            <input 
                        type="text"
                        value={routine[day][time]}
                        onChange={(e) => updateRoutine(day, time, e.target.value)}
                        />
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
        </table>
    </div>
    );
}

export default RoutinePage;