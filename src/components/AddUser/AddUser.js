import Card from "../../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const onClickHandler = (event) => {
        props.onShowAddUserForm(true);
    };

    return (
        <Card className={classes.userCard}>
            <div className="text-align-center">
                <button onClick={onClickHandler}>Add new team member</button>
            </div>
        </Card>
    )
}

export default AddUser;
