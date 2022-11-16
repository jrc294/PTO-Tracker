import Day from "./Day";
import Card from "../../UI/Card";

const Person = (props) => {

    const numberOfDays = new Date(props.filterYear, props.filterMonth + 1, 0).getDate();

    const setSelected = (day, isSelected) => {
        props.onSetSelected(props.id, day, isSelected);
    }

    const renderDays = () => {
        let days = [];
        for (let i = 0; i < numberOfDays; i++) {
            const date = new Date(props.filterYear, props.filterMonth, i + 1);

            const isSelected = props.person.days.filter((day) => day === (i + 1)).length > 0;
            days[i] = <Day key={i} day={i + 1} dayOfWeek={date.getDay()} onSetSelected={setSelected} isSelected={isSelected}/>
        }
        return days;
    }

    return (
        <Card>
            <p><b>Name : {props.person.name}</b></p>
            {renderDays()}
        </Card>
    )
}

export default Person;
