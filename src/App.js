import Main from "./components/Main";
import {useEffect, useState} from "react";
import Login from "./components/Login/Login";
import ErrorModal from "./components/Container/ErrorModal";

const App = () => {

    const [loggedIn, setLoggedIn] = useState('0');
    const [waitingForLogin, setWaitingForLogin] = useState('0');
    const [loginFailed, setLoginFailed] = useState('0');

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    },[]);

    const logInHandler = (userName, password) => {
        console.log('login handler');
        setWaitingForLogin("1");
        setLoginFailed("0");
        setTimeout(() => {
            setWaitingForLogin("0");
            if (userName === 'jonathan@coxautoinc.com' && password === 'Hello1') {
                setLoggedIn('1');
                localStorage.setItem("loggedIn","1");
            } else {
                setLoginFailed("1");
            }

        },6000);
    }

    const errorModalHandler = () => {
        console.log('hello');
        setLoginFailed("0");
    }

    const logoutHandler = () => {
        setLoggedIn("0");
        localStorage.setItem("loggedIn","0");
    }

    return (
        <>
            {loginFailed === '1' && <ErrorModal title='Login Failed' message='Invalid username or passsword' onErrorModalCancel={errorModalHandler}/>}
            {loggedIn === '1' ? <Main onLogout={logoutHandler}></Main> : <Login login={logInHandler}/>}
            {waitingForLogin === '1' &&
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}

        </>
    )
}

export default App;
