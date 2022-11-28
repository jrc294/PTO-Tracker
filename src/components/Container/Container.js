import Card from "../../UI/Card";
import Filter from "./Filter";
import PersonList from "./PersonList";
import styles from "./Container.module.css";

const Container = (props) => {

    console.log(props.filterTeam);
    const saveChangeYearHandler = (year) => {
        props.onChangeYear(year);
    }

    const saveChangeTeamHandler = (team) => {
        props.onSaveChangeTeam(team);
    }

    const setSelected = (userKey, day, isSelected) => {
        props.onSetSelected(userKey, day, isSelected);
    }

    const filteredUsers = props.data.filter((item) => item.team === props.filterTeam);

    return (
        <div>
            <Card className={styles.container}>
                <div className="align-right">
                    <Filter onChangeYear={saveChangeYearHandler}
                            onChangeTeam={saveChangeTeamHandler}
                            filterYear={props.filterYear}
                            filterMonth={props.filterMonth}
                            filterTeam={props.filterTeam}
                            onChangeMonth={props.onChangeMonth}/>
                </div>
                <PersonList users={filteredUsers} filterYear={props.filterYear} filterMonth={props.filterMonth} onSetSelected={setSelected}/>
            </Card>
        </div>
    );
}

export default Container;
