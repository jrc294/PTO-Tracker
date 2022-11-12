import "./Main.css";
import Container from "./Container/Container";
import NewUser from "./NewUser/NewUser";
import {useState} from "react";
import AddUser from "./AddUser/AddUser";

const DUMMY_DATA = [{id: 1, name: 'Jonathan', team: 'Team 404', days: [{day: 21},{day: 22}]},{id: 2, name: 'Angela', team: 'Kettle', days: [{day: 6},{day: 7},{day: 8}]}];

const Main = () => {

    const [filterYear, setFilterYear] = useState('2022');
    const [data, setData] = useState(DUMMY_DATA);
    const [isUserBeingAdded, setIsUserBeingAdded] = useState(false);

    const saveAddUserHandler = (userData) => {
        const newUser = {id: userData.id, name: userData.name, team: userData.team, days: []};
        setData((previousState) => {
            return [newUser, ...previousState];
        });
        setIsUserBeingAdded(false);
    };

    const saveShowAddUserForm = (isShowAddUserForm) => {
        setIsUserBeingAdded(isShowAddUserForm);
    }

    console.log(data);

    const saveChangeYearHandler = (year) => {
        setFilterYear(year);
    }

    const cancelUserHandler = () => {
        setIsUserBeingAdded(false);
    }

    return (
        <div>
            <h2 className="header">PTO Tracker</h2>
            {isUserBeingAdded ? <NewUser onAddUser={saveAddUserHandler} onCancel={cancelUserHandler}/> : <AddUser onShowAddUserForm={saveShowAddUserForm}/>}
            <Container data={data} onChangeYear={saveChangeYearHandler} filterYear={filterYear}/>
        </div>
    )
}

export default Main;
