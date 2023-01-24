import React, {useEffect, useState} from "react";

const DUMMY_DATA = [{id: 121, name: 'Jonathan', team: 'Team 404', days: [21, 22]}, {
    id: 122,
    name: 'Angela',
    team: 'Kettle',
    days: [6, 7, 8]
}];

const AppContext = React.createContext({
    filterYear: '2022',
    fiterMonth: '1',
    filterData: [],
    data: {},
    saveChangeYearHandler: (year) => {},
    saveChangeMonthHandler: (isIncrease) => {},
    saveChangeTeamHandler: (team) => {}
});

export const AppContextProvider = (props) => {

    const [filterMonth, setFilterMonth] = useState(new Date().getMonth());
    const [filterTeam, setFilterTeam] = useState(' ');
    const [filterYear, setFilterYear] = useState('2022');
    const [data, setData] = useState(DUMMY_DATA);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterTeam(localStorage.getItem('filter-group') ? localStorage.getItem('filter-group') : 1);
    }, []);

    useEffect(() => {
        fetchRotasHandler();
    }, []);

    const saveChangeYearHandler = (year) => {
        setFilterYear(year);
    }

    async function fetchRotasHandler() {
        const response = await fetch('https://u9sbnlhjsl.execute-api.us-east-1.amazonaws.com/default/getAllRotas');
        const data = await response.json();
        setFilterData(data.Items);
        setFilterTeam(localStorage.getItem('filter-group') ? localStorage.getItem('filter-group') : 1);
        console.log(data.Items);
    }

    const adjustFilterYear = (isIncrease) => {
        setFilterYear((previousState) => {
            const newYear = isIncrease ? Number(previousState) + 1 : Number(previousState) - 1;
            return newYear;
        });
    }

    const saveAddUserHandler = (userData) => {
        const newUser = {id: userData.id, name: userData.name, team: userData.team, days: []};
        console.log(newUser);
        setData((previousState) => {
            return [newUser, ...previousState];
        });
        console.log(data);
    };

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

    const saveChangeTeamHandler = (team) => {
        setFilterTeam(team);
        localStorage.setItem('filter-group', team);
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

    return <AppContext.Provider value={{
            filterYear: filterYear,
            data: data,
            onChangeYear: saveChangeYearHandler,
            filterMonth: filterMonth,
            filterData: filterData,
            onChangeMonth: saveChangeMonthHandler,
            onChangeTeam: saveChangeTeamHandler,
            filterTeam: filterTeam,
            onSetSelected: setSelected,
            onAddUser: saveAddUserHandler}}>
        {props.children}
    </AppContext.Provider>
}

export default  AppContext;
