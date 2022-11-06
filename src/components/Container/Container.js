import Person from "./Person";
import Card from "../../UI/Card";
import Filter from "./Filter";

const Container = (props) => {

    const saveChangeYearHandler = (year) => {
        props.onChangeYear(year);
    }

    return (
        <div>
            <Card className="container">
                <div className="align-right">
                    <Filter onChangeYear={saveChangeYearHandler} filterYear={props.filterYear}/>
                </div>
                <Person person={props.data[0]}/>
                <Person person={props.data[1]}/>
            </Card>
        </div>
    );
}

export default Container;
