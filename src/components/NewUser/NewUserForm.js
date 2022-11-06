import './NewUserForm.css';
import Card from '../../UI/Card';
import { useState } from "react";

const NewUserForm = (props) => {

    const [userName, setUserName] = useState('');

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const userData = {userData : userName};
        setUserName('');
        props.onAddUser(userData);
    }

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name: </label>
                    <input className="new-user-name" value={userName} type="text" onChange={userNameChangeHandler}/>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </Card>
    );
}

export default NewUserForm;
