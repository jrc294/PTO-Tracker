import Person from "./Person";

import "./PersonList.css";

const PersonList = (props) => {

    if (props.users.length === 0) {
        return (
            <h2 className="align-center">No Team Members Found</h2>
        )
    }

    const setSelected = (userKey, day, isSelected) => {
        props.onSetSelected(userKey, day, isSelected);
    };

    return (
        <div>
            {props.users.map((item) => {
                return <Person key={item.id}
                               id={item.id}
                               person={item}
                               filterYear={props.filterYear}
                               filterMonth={props.filterMonth}
                               onSetSelected={setSelected}/>
            })}
        </div>
    );
};

export default PersonList;
