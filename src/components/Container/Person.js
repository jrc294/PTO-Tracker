import Day from "./Day";
import Card from "../../UI/Card";

const Person = (props) => {

    return (
        <Card className="person">
            <p><b>Name : {props.person.name}</b></p>
            <Day day={props.person.days[0] ? props.person.days[0].day : 0}/>
            <Day day={props.person.days[1] ? props.person.days[1].day : 0}/>
            <Day day={props.person.days[2] ? props.person.days[2].day : 0}/>
        </Card>
    )
}

export default Person;
