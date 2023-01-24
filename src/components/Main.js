import Container from "./Container/Container";
import NewUser from "./NewUser/NewUser";
import {useState} from "react";
import AddUser from "./AddUser/AddUser";
import styles from "./Main.module.css";

const Main = (props) => {

    const [isUserBeingAdded, setIsUserBeingAdded] = useState(false);

    const saveAddUserHandler = () => {
        setIsUserBeingAdded(false);
    };

    const saveShowAddUserForm = (isShowAddUserForm) => {
        setIsUserBeingAdded(isShowAddUserForm);
    }

    const cancelUserHandler = () => {
        setIsUserBeingAdded(false);
    }

    const logoutButtonHandler = () => {
        props.onLogout();
    }

    return (
        <>
            <div className={styles['header-div']}></div>
            <div className={styles['header-div']}>
                <h2 className={styles.header}>Team Rota</h2>
            </div>
            <div className={styles['header-div']}>
                <button className={styles.pullright} onClick={logoutButtonHandler}>Logout</button>
            </div>
            <Container/>
            {isUserBeingAdded ? <NewUser onAddUser={saveAddUserHandler} onCancel={cancelUserHandler}/> :
                <AddUser onShowAddUserForm={saveShowAddUserForm}/>}
        </>
    )
}

export default Main;
