import Person from "./Person";

import "./PersonList.css";

const PersonList = (props) => {

    if (props.users.length === 0) {
        return (
            <h2 className="align-center">No Team Members Found</h2>
        )
    }

    return (
        <div>
            {props.users.map((item) => {
                return <Person key={item.id} person={item}/>
            })}
        </div>
    );
};

export default PersonList;
