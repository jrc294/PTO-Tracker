import './NewUser.css';
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {

    const saveAddUserHandler = (userData) => {
        console.log(userData);
        const newUserData = {
            ...userData,
            id: Math.random().toString()
        }
        props.onAddUser(newUserData);
    };

    const cancelButtonHandler = () => {
        props.onCancel();
    }

    return (
        <NewUserForm onCancel={cancelButtonHandler} onAddUser={saveAddUserHandler}/>
    )
}

export default NewUser;
