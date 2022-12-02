import Card from "../../UI/Card";
import classes from "./Login.module.css";
import {useRef, useState, useEffect} from "react";


const Login = (props) => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.login(userNameRef.current.value, passwordRef.current.value);
    };

    return (
        <Card className={classes["login-card"]}>
            <div className={classes.header}>Please Login</div>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="user-name">User Name</label>
                    <input id="user-name" type="text" ref={userNameRef}/>
                </div>
                <div>
                    <label htmlFor="password">Passsword</label>
                    <input id="password" type="password" ref={passwordRef}/>
                    <div className={classes.textRight}>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </Card>
    )
};

export default Login;
