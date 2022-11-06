import './Card.css';
import '../components/Container/Person.css';
import '../components/Container/Container.css';

const Card = (props) => {

    const classes = "card " + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
