import Day from "./Day";
import Card from "../../UI/Card";

const Person = (props) => {

    return (
        <Card className="person">
            <p><b>Name : {props.person.name}</b></p>
            <Day className="day" day={props.person.days[0].day}/>
            <Day day={props.person.days[1].day}/>
            <Day day={props.person.days[2] ? props.person.days[2].day : 0}/>
        </Card>
    )
}

export default Person;
