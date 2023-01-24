import styles from './Day.module.css';
import {useContext} from "react";
import AppContext from "../../store/context";

const Day = (props) => {

    const dayAbbrev = ['Su','Mo','Tu','We','Th','Fr','Sa'];

    const ctx = useContext(AppContext);

    let isWeekend = false;

    if (props.dayOfWeek === 0 || props.dayOfWeek === 6) {
        isWeekend = true;
    }

    const clickHandler = () => {
        if (!isWeekend) {
            ctx.onSetSelected(props.id, props.day, !props.isSelected);
        }
    }

    return (
        <button onClick={clickHandler} className={`${styles.day} ${props.isSelected ? styles["day-selected"] : ''} ${isWeekend ? styles["day-unavailable"] : ''}`}>{dayAbbrev[props.dayOfWeek]} {props.day}</button>
    )
}

export default Day;
