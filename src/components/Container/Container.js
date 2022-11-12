import Person from "./Person";
import Card from "../../UI/Card";
import Filter from "./Filter";
import {useState} from "react";
import PersonList from "./PersonList";

const Container = (props) => {

    const [filterTeam, setFilterTeam] = useState("Team 404");

    const saveChangeYearHandler = (year) => {
        props.onChangeYear(year);
    }

    const saveChangeTeamHandler = (team) => {
        setFilterTeam(team);
    }

    const filteredUsers = props.data.filter((item) => item.team === filterTeam);

    return (
        <div>
            <Card className="container">
                <div className="align-right">
                    <Filter onChangeYear={saveChangeYearHandler} onChangeTeam={saveChangeTeamHandler} filterYear={props.filterYear}/>
                </div>
                <PersonList users={filteredUsers}/>
            </Card>
        </div>
    );
}

export default Container;
