import React, { useState } from "react";
import IngredientsPage from "./IngredientsPage";
import { getProductsData } from "../services/apiService"; 

function RoutinePage() {
    const [routine, setRoutine] = useState({
        Monday: {morning: "", evening: ""},
        Tuesday: {morning: "", evening: ""},
        Wednesday: {morning: "", evening: ""},
        Thursday: {morning: "", evening: ""},
        Friday: {morning: "", evening: ""},
        Saturday: {morning: "", evening: ""},
        Sunday: {morning: "", evening: ""},
    });

    //routine updates
    const updateRoutine = (day, time, item) => {
        setRoutine({ ...routine,[day]: {...routine[day], [time]: item } });
    }; 
//update routine function isn't being used at the moment
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
        {Object.keys(routine).map(day => (
            <tr key={day}>
                <td>{day}</td>
                {Object.keys(routine[day]).map(time => (
                <td key={time}>{routine[day][time]}</td>
            ))}
        </tr>
    ))}
        </tbody>
        </table>
    </div>
    );
}

export default RoutinePage;