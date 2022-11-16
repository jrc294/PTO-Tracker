import NewUserForm from "./NewUserForm";

const NewUser = (props) => {

    const saveAddUserHandler = (userData) => {
        console.log(userData);
        const newUserData = {
            ...userData,
            id: parseInt(Math.random() * 1000)
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
