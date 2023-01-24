import Day from "./Day";
import Card from "../../UI/Card";
import classes from "./Person.module.css";
import {useContext} from "react";
import AppContext from "../../store/context";

const Person = (props) => {

    const ctx = useContext(AppContext);

    const numberOfDays = new Date(ctx.filterYear, ctx.filterMonth + 1, 0).getDate();

    const renderDays = () => {
        let days = [];
        for (let i = 0; i < numberOfDays; i++) {
            const date = new Date(ctx.filterYear, ctx.filterMonth, i + 1);

            const isSelected = props.person.days.filter((day) => day === (i + 1)).length > 0;
            days[i] = <Day key={i} day={i + 1} id={props.id} dayOfWeek={date.getDay()} isSelected={isSelected}/>
        }
        return days;
    }

    return (
        <Card className={classes.person}>
            <p><b>Name : {props.person.name}</b></p>
            {renderDays()}
        </Card>
    )
}

export default Person;
