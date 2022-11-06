import './Day.css';
import { useState} from "react";

const Day = (props) => {

    const [dayItemColor, setDayItemColor] = useState("day-item-white");

    const clickHandler = () => {
        dayItemColor === "day-item-white" ? setDayItemColor("day-item-yellow") : setDayItemColor("day-item-white");
    }

    return (
        <button onClick={clickHandler} className={dayItemColor}>{props.day}</button>
    )
}

export default Day;
