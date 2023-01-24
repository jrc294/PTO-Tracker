import Card from "../../UI/Card";
import Filter from "./Filter";
import PersonList from "./PersonList";
import styles from "./Container.module.css";
import {useContext} from "react";
import AppContext, {AppContextProvider} from "../../store/context";

const Container = () => {

    const ctx = useContext(AppContext);

    console.log(ctx);

    const filteredUsers = ctx.data.filter((item) => item.team === ctx.filterTeam);

    return (
        <div>
            <Card className={styles.container}>
                <div className="align-right">
                    <Filter/>
                </div>
                <PersonList users={filteredUsers}/>
            </Card>
        </div>
    );
}

export default Container;
