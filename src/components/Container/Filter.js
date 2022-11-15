import './Filter.css';

const Filter = (props) => {

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const saveChangeYearHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    const saveChangeTeamHandler = (event) => {
        props.onChangeTeam(event.target.value);
    }

    const saveIncreaseMonthHandler = () => {
        props.onChangeMonth(true);
    }

    const saveDecreaseMonthHandler = () => {
        props.onChangeMonth(false);
    }

    return (
        <div className="more-margin-bottom">
            <div className="filter-div">
                <select onChange={saveChangeTeamHandler}>
                    <option>Team 404</option>
                    <option>Kettle</option>
                    <option>Rogue</option>
                </select>
            </div>
            <div className="filter-div header">
                    <button onClick={saveDecreaseMonthHandler}>&lt;</button>
                    <h2 className="filter-div-center">{months[props.filterMonth]}</h2>
                    <button onClick={saveIncreaseMonthHandler}>&gt;</button>
            </div>
            <div className="filter-div text-right">
                <select value={props.filterYear} onChange={saveChangeYearHandler}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    <option value='2028'>2028</option>
                    <option value='2029'>2029</option>
                    <option value='2030'>2030</option>
                    <option value='2031'>2031</option>
                    <option value='2032'>2032</option>
                    <option value='2033'>2033</option>
                </select>
            </div>
        </div>
    )
    ;
}

export default Filter;
