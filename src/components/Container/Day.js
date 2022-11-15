import './Day.css';

const Day = (props) => {

    const dayAbbrev = ['Su','Mo','Tu','We','Th','Fr','Sa'];

    let classNames = "available";
    let isWeekend = false;

    if (props.dayOfWeek === 0 || props.dayOfWeek === 6) {
        classNames = "available weekend";
        isWeekend = true;
    }

    if (props.isSelected) {
        classNames = "available day-selected";
    }

    const clickHandler = () => {
        if (!isWeekend) {
            props.onSetSelected(props.day, !props.isSelected);
        }
    }

    return (
        <button onClick={clickHandler} className={classNames}>{dayAbbrev[props.dayOfWeek]} {props.day}</button>
    )
}

export default Day;
