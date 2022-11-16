import Card from "../../UI/Card";
import Filter from "./Filter";
import {useState} from "react";
import PersonList from "./PersonList";
import styles from "./Container.module.css";

const Container = (props) => {

    const [filterTeam, setFilterTeam] = useState("Team 404");

    const saveChangeYearHandler = (year) => {
        props.onChangeYear(year);
    }

    const saveChangeTeamHandler = (team) => {
        setFilterTeam(team);
    }

    const setSelected = (userKey, day, isSelected) => {
        props.onSetSelected(userKey, day, isSelected);
    }

    const filteredUsers = props.data.filter((item) => item.team === filterTeam);

    return (
        <div>
            <Card className={styles.container}>
                <div className="align-right">
                    <Filter onChangeYear={saveChangeYearHandler}
                            onChangeTeam={saveChangeTeamHandler}
                            filterYear={props.filterYear}
                            filterMonth={props.filterMonth}
                            onChangeMonth={props.onChangeMonth}/>
                </div>
                <PersonList users={filteredUsers} filterYear={props.filterYear} filterMonth={props.filterMonth} onSetSelected={setSelected}/>
            </Card>
        </div>
    );
}

export default Container;
