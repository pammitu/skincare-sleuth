import React from "react";
import IngredientsPage from "./IngredientsPage";

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

    return (
        <div>
            <h1>Build your Routine</h1>
            <p>Everyone's skin is different and so is there schedule, build a schedule with your favorite ingreients/products below!</p>

            <table>
            <thead>
            <tr>
            <th>Morning</th>
            <th>Evening</th>
            </tr>
            </thead>
            </table>
            <tbody>
{Object.keys(routine).map(day => (
    <tr key={day}>
        <td>{day}</td>
        {Object.keys(routine[day]).map(time => (
            <tf key={time}>{routine[day][time]}</tf>
        ))}
    </tr>
))}
            </tbody>
        </div>
    );
}

export default RoutinePage;