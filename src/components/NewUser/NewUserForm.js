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
            <form className="new-user-form" onSubmit={onSubmitHandler}>
                <div>
                    <label for="name">Name: </label>
                    <input value={userName} className="form-element" id="name" type="text" onChange={userNameChangeHandler}/>
                    <label for="team">Team: </label>
                    <select id="team" className="form-element" value={userTeam} onChange={userTeamChangeHandler}>
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
