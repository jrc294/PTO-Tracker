import styles from './NewUserForm.module.css';
import Card from '../../UI/Card';
import { useState, useRef } from "react";
import ErrorModal from "../Container/ErrorModal";
import classes from "../Login/Login.module.css";

const NewUserForm = (props) => {

    const nameInputRef = useRef();
    const teamSelectRef = useRef();
    const [invalidInput, setInvalidInput] = useState(false);
    const [errorMessage, setErrrorMessage] = useState();

    const userNameChangeHandler = (event) => {
        setInvalidInput(false);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if (nameInputRef.current.value.trim().length === 0) {
            setInvalidInput(true);
            setErrrorMessage({title: 'Error', message: 'Please enter a name'})
            return;
        }

        const userData = {name : nameInputRef.current.value, team : +teamSelectRef.current.value};
        console.log(teamSelectRef.current);
        nameInputRef.current.value='';
        props.onAddUser(userData);
    }

    const onCancelButtonClickHandle = () => {
        props.onCancel();
    }

    const errorHandler = () => {
        setInvalidInput(false);
        setErrrorMessage(undefined);
    }

    return (
        <>
            {invalidInput && <ErrorModal message={errorMessage.message} title={errorMessage.title} onErrorModalCancel={errorHandler}/>}
            <Card className={styles.card}>
                <div className={styles.header}>Add User</div>
                <form className="new-user-form" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="name" className={`${invalidInput ? styles['invalid-label'] : ''}`}>Name</label>
                        <input className={`${styles['form-element']} ${invalidInput && styles.invalid}`}
                               id="name"
                               type="text"
                               ref={nameInputRef}
                               onChange={userNameChangeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="team">Team</label>
                        <select id="team" className={styles['form-element']} ref={teamSelectRef}>
                            <option value="1">Team 404</option>npm
                            <option value="2">Kettle</option>
                            <option value="3">Rogue</option>
                        </select>
                    </div>
                    <div className="text-align-right">
                        <button type="submit">Add User</button>
                        <button onClick={onCancelButtonClickHandle}>Cancel</button>
                    </div>
                </form>
            </Card>
        </>
    );
}

export default NewUserForm;
