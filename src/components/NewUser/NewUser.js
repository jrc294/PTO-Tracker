import './NewUser.css';
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {

    const saveAddUserHandler = (userData) => {
        const newUserData = {
            ...userData,
            id: Math.random().toString()
        }
        props.onAddUser(newUserData);
    };

    return (
        <NewUserForm onAddUser={saveAddUserHandler}/>
    )
}

export default NewUser;
