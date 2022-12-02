import Container from "./Container/Container";
import NewUser from "./NewUser/NewUser";
import {useState, useEffect} from "react";
import AddUser from "./AddUser/AddUser";
import styles from "./Main.module.css";

const DUMMY_DATA = [{id: 121, name: 'Jonathan', team: 1, days: [21,22]},{id: 122, name: 'Angela', team: 2, days: [6,7,8]}];

const Main = (props) => {

    const [filterYear, setFilterYear] = useState('2022');
    const [data, setData] = useState(DUMMY_DATA);
    const [isUserBeingAdded, setIsUserBeingAdded] = useState(false);
    const [filterMonth, setFilterMonth] = useState(new Date().getMonth());
    const [filterTeam, setFilterTeam] = useState();

    useEffect(() => {
        console.log('use-effect');
        setFilterTeam(localStorage.getItem('filter-group') ? +localStorage.getItem('filter-group') : 1);
    },[]);

    const saveAddUserHandler = (userData) => {
        const newUser = {id: userData.id, name: userData.name, team: userData.team, days: []};
        console.log(newUser);
        setData((previousState) => {
            return [newUser, ...previousState];
        });
        console.log(data);
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
        let userToUpdate = data.find((user) => user.id === userId);
        let updatedDays = undefined;
        if (isSelected) {
            updatedDays = [day, ...userToUpdate.days];
            userToUpdate.days = updatedDays;
        } else {
            updatedDays = userToUpdate.days.filter((existingDay) => existingDay !== day);
            userToUpdate.days = updatedDays;
        }
        console.log(userToUpdate);
        setData((previousState) => {
            return [...previousState];
        });
        console.log(data);
    };

    const saveChangeTeamHandler = (team) => {
        setFilterTeam(team);
        console.log(typeof team);
        localStorage.setItem('filter-group', team.toString());
    }

    const logoutButtonHandler = () => {
        props.onLogout();
    }

    return (
        <>
            <div className={styles['header-div']}></div>
            <div className={styles['header-div']}>
                <h2 className={styles.header}>Team Rota</h2>
            </div>
            <div className={styles['header-div']}>
                <button className={styles.pullright} onClick={logoutButtonHandler}>Logout</button>
            </div>
            <Container data={data}
                       onChangeYear={saveChangeYearHandler}
                       onSaveChangeTeam={saveChangeTeamHandler}
                       filterYear={filterYear}
                       filterMonth={filterMonth}
                       filterTeam={filterTeam}
                       onChangeMonth={saveChangeMonthHandler} onSetSelected={setSelected}/>
            {isUserBeingAdded ? <NewUser onAddUser={saveAddUserHandler} onCancel={cancelUserHandler}/> : <AddUser onShowAddUserForm={saveShowAddUserForm}/>}
        </>
    )
}

export default Main;
