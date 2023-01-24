import Card from "../../UI/Card";
import classes from "./Login.module.css";
import {useReducer} from "react";

const credsReducer = (state, action) => {
    if (action.type === "PASSWORD_USER_INPUT") {
        return {password: action.password, isPasswordValid: action.password.length > 5, email: state.email, isEmailValid: state.isEmailValid};
    }
    if (action.type === "EMAIL_USER_INPUT") {
        return {password: state.password, isPasswordValid: state.isPasswordValid, email: action.email, isEmailValid: action.email.includes("@")};
    }
    return {password: '', isPasswordValid: false, email: '', isEmailValid: false};
};

const Login = (props) => {

    const [credsState, dispatchCreds] = useReducer(credsReducer, {password: '', isPasswordValid: false, email: '', isEmailValid: false});

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.login(credsState.email, credsState.password);
    };

    const changeEmailHandler = (event)  => {
        //setEmail(event.target.value);
        dispatchCreds({type: "EMAIL_USER_INPUT", "email": event.target.value});
        console.log(credsState);
    };

    const changePasswordHandler = (event)  => {
        dispatchCreds({type: "PASSWORD_USER_INPUT", "password": event.target.value});
        console.log(credsState);
    };

    return (
        <Card className={classes["login-card"]}>
            <div className={classes.header}>Please Login</div>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="user-name">Email</label>
                    <input id="user-name" type="text" onChange={changeEmailHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Passsword</label>
                    <input id="password" type="password" onChange={changePasswordHandler}/>
                    <div className={classes.textRight}>
                        <button type="submit" disabled={!credsState.isEmailValid || !credsState.isPasswordValid}>Login</button>
                    </div>
                </div>
            </form>
        </Card>
    )
};

export default Login;
