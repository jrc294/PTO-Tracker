import "./Main.css";
import Container from "./Container/Container";
import NewUser from "./NewUser/NewUser";
import {useState} from "react";

const Main = () => {

    const [filterYear, setFilterYear] = useState('2022');

    const resp = [{name: 'Jonathan', days: [{day: 21},{day: 22}]},{name: 'Angela', days: [{day: 6},{day: 7},{day: 8}]}];

    const saveAddUserHandler = (userData) => {
        console.log(userData);
    }

    const saveChangeYearHandler = (year) => {
        setFilterYear(year);
    }

    return (
        <div>
            <h2 className="header">PTO Tracker</h2>
            <NewUser onAddUser={saveAddUserHandler}/>
            <Container data={resp} onChangeYear={saveChangeYearHandler} filterYear={filterYear}/>
        </div>
    )
}

export default Main;
