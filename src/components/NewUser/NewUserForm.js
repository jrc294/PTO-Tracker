import './NewUserForm.css';
import Card from '../../UI/Card';
import { useState } from "react";

const NewUserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userTeam, setUserTeam] = useState('Team 404');

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userTeamChangeHandler = (event) => {
        setUserTeam(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const userData = {name : userName, team : userTeam};
        setUserName('');
        setUserTeam('Team 404');
        props.onAddUser(userData);
    }

    const onCancelButtonClickHandle = () => {
        props.onCancel();
    }

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name: </label>
                    <input className="new-user-name" value={userName} type="text" onChange={userNameChangeHandler}/>
                    <label>Team: </label>
                    <select value={userTeam} onChange={userTeamChangeHandler}>
                        <option>Team 404</option>
                        <option>Kettle</option>
                        <option>Rogue</option>
                    </select>
                </div>
                <div className="add-user-button">
                    <button type="submit">Add User</button>
                    <button onClick={onCancelButtonClickHandle}>Cancel</button>
                </div>
            </form>
        </Card>
    );
}

export default NewUserForm;
