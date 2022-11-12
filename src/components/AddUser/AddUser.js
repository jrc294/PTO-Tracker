import Card from "../../UI/Card";
import "./AddUser.css";


const AddUser = (props) => {

    const onClickHandler = (event) => {
        props.onShowAddUserForm(true);
    };

    return (
        <Card className="card-add-new-user-button">
            <div className="add-new-button">
                <button onClick={onClickHandler}>Add new team member</button>
            </div>
        </Card>
    )
}

export default AddUser;
