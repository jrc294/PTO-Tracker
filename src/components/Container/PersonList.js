import Person from "./Person";

import styles from "./PersonList.module.css";

const PersonList = (props) => {

    if (props.users.length === 0) {
        return (
            <h2 className={styles["align-center-white"]}>No Team Members Found</h2>
        )
    }

    return (
        <div>
            {props.users.map((item) => {
                return <Person key={item.id}
                               id={item.id}
                               person={item}/>
            })}
        </div>
    );
};

export default PersonList;
