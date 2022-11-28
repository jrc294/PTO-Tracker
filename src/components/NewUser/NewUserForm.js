import styles from './NewUserForm.module.css';
import Card from '../../UI/Card';
import { useState, useRef } from "react";
import ErrorModal from "../Container/ErrorModal";

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

        const userData = {name : nameInputRef.current.value, team : teamSelectRef.current.value};
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
            <Card>
                <form className="new-user-form" onSubmit={onSubmitHandler}>
                    <div>
                        <label className={`${invalidInput ? styles['invalid-label'] : ''}`}>Name: </label>
                        <input className={`${styles['form-element']} ${invalidInput && styles.invalid}`}
                               id="name"
                               type="text"
                               ref={nameInputRef}
                               onChange={userNameChangeHandler}/>
                        <label>Team: </label>
                        <select id="team" className={styles['form-element']} ref={teamSelectRef}>
                            <option>Team 404</option>npm
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
        </>
    );
}

export default NewUserForm;
