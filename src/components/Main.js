import "./Main.css";
import Container from "./Container/Container";
import NewUser from "./NewUser/NewUser";
import {useState} from "react";
import AddUser from "./AddUser/AddUser";

const DUMMY_DATA = [{id: 121, name: 'Jonathan', team: 'Team 404', days: [21,22]},{id: 122, name: 'Angela', team: 'Kettle', days: [6,7,8]}];

const Main = () => {

    const [filterYear, setFilterYear] = useState('2022');
    const [data, setData] = useState(DUMMY_DATA);
    const [isUserBeingAdded, setIsUserBeingAdded] = useState(false);
    const [filterMonth, setFilterMonth] = useState(new Date().getMonth());

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

    const saveChangeYearHandler = (year) => {
        setFilterYear(year);
    }

    const cancelUserHandler = () => {
        setIsUserBeingAdded(false);
    }

    const adjustFilterYear = (isIncrease) => {
        setFilterYear((previousState) => {
            const newYear = isIncrease ? Number(previousState) + 1 : Number(previousState) - 1;
            return newYear;
        });
    }

    const saveChangeMonthHandler = (isIncrease) => {
        setFilterMonth((previousState) => {
            let newMonth = isIncrease ? previousState + 1 : previousState - 1;
            if (newMonth > 11) {
                newMonth = 0;
                adjustFilterYear(true);
            } else if (newMonth < 0) {
                newMonth = 11;
                adjustFilterYear(false);
            }
            return newMonth;
        })
    }

    const setSelected = (userId, day, isSelected) => {
        let userToUpdate = data.filter((user) => user.id === userId);
        let updatedDays = undefined;
        if (isSelected) {
            updatedDays = [day, ...userToUpdate[0].days];
            userToUpdate[0].days = updatedDays;
        } else {
            updatedDays = userToUpdate[0].days.filter((existingDay) => existingDay !== day);
            userToUpdate[0].days = updatedDays;
        }
        setData((previousState) => {
            return [userToUpdate[0], ...previousState.filter((user) => user.id !== userToUpdate[0].id)];
        });
        console.log(data);
    };

    return (
        <div>
            <h2 className="header">PTO Tracker</h2>
            <Container data={data}
                       onChangeYear={saveChangeYearHandler}
                       filterYear={filterYear}
                       filterMonth={filterMonth}
                       onChangeMonth={saveChangeMonthHandler} onSetSelected={setSelected}/>
            {isUserBeingAdded ? <NewUser onAddUser={saveAddUserHandler} onCancel={cancelUserHandler}/> : <AddUser onShowAddUserForm={saveShowAddUserForm}/>}
        </div>
    )
}

export default Main;
