import styles from './NewUserForm.module.css';
import Card from '../../UI/Card';
import { useState } from "react";

const NewUserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userTeam, setUserTeam] = useState('Team 404');
    const [invalidInput, setInvalidInput] = useState(false);

    const userNameChangeHandler = (event) => {
        setInvalidInput(false);
        setUserName(event.target.value);
    }

    const userTeamChangeHandler = (event) => {
        setUserTeam(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(userName.trim().length);

        if (userName.trim().length === 0) {
            setInvalidInput(true);
            return;
        }

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
                    <label className={`${invalidInput ? styles['invalid-label'] : ''}`}>Name: </label>
                    <input value={userName} className={`${styles['form-element']} ${invalidInput ? styles.invalid : ''}`} id="name" type="text" onChange={userNameChangeHandler}/>
                    <label>Team: </label>
                    <select id="team" className={styles['form-element']} value={userTeam} onChange={userTeamChangeHandler}>
                        <option>Team 404</option>
                        <option>Kettle</option>
                        <option>Rogue</option>
                    </select>
                </div>
                <div className="text-align-right">
                    <button type="submit">Add User</button>
                    <button onClick={onCancelButtonClickHandle}>Cancel</button>
                </div>
            </form>
        </Card>
    );
}

export default NewUserForm;
