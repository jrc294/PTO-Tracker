import NewUserForm from "./NewUserForm";
import {useContext} from "react";
import AppContext, {AppContextProvider} from "../../store/context";

const NewUser = (props) => {

    const ctx = useContext(AppContext);

    const saveAddUserHandler = (userData) => {
        console.log(userData);
        const newUserData = {
            ...userData,
            id: parseInt(Math.random() * 1000)
        }
        ctx.onAddUser(userData);
        props.onAddUser();
    };

    const cancelButtonHandler = () => {
        props.onCancel();
    }

    return (
        <NewUserForm onCancel={cancelButtonHandler} onAddUser={saveAddUserHandler}/>
    )
}

export default NewUser;
