import Card from '../../UI/Card';
import ReactDOM from "react-dom";
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop}/>
}

const ErrorOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                {props.message}
            </div>
            <footer className={classes.actions}>
                <button onClick={props.onClick}>OK</button>
            </footer>
        </Card>
    );
}

const ErrorModal = (props) => {

    const okButtonClickHandler = () => {
        props.onErrorModalCancel();
    };

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={okButtonClickHandler}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ErrorOverlay onClick={okButtonClickHandler} title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
        </>
    );
}

export default ErrorModal;
