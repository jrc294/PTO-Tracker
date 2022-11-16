import Card from "../../UI/Card";

const AddUser = (props) => {

    const onClickHandler = (event) => {
        props.onShowAddUserForm(true);
    };

    return (
        <Card>
            <div className="text-align-center">
                <button onClick={onClickHandler}>Add new team member</button>
            </div>
        </Card>
    )
}

export default AddUser;
