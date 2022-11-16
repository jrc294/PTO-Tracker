import styles from './Day.module.css';

const Day = (props) => {

    const dayAbbrev = ['Su','Mo','Tu','We','Th','Fr','Sa'];

    let isWeekend = false;

    if (props.dayOfWeek === 0 || props.dayOfWeek === 6) {
        isWeekend = true;
    }

    const clickHandler = () => {
        if (!isWeekend) {
            props.onSetSelected(props.day, !props.isSelected);
        }
    }

    return (
        <button onClick={clickHandler} className={`${styles.day} ${props.isSelected ? styles["day-selected"] : ''} ${isWeekend ? styles["day-unavailable"] : ''}`}>{dayAbbrev[props.dayOfWeek]} {props.day}</button>
    )
}

export default Day;
