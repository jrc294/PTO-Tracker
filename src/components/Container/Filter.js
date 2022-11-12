import './Filter.css';

const Filter = (props) => {

    console.log(props.filterYear);

    const saveChangeYearHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    const saveChangeTeamHandler = (event) => {
        props.onChangeTeam(event.target.value);
    }

    return (
        <div>
            <select onChange={saveChangeTeamHandler}>
                <option>Team 404</option>
                <option>Kettle</option>
                <option>Rogue</option>
            </select>
            <select value={props.filterYear} onChange={saveChangeYearHandler}>
                <option value='2023'>2021</option>
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
    )
    ;
}

export default Filter;
