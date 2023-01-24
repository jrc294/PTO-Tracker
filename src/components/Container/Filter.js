import styles from './Filter.module.css';
import {useContext} from "react";
import AppContext from "../../store/context";

const Filter = () => {

    const ctx = useContext(AppContext);
    console.log(ctx.filterYear);
    console.log(ctx.filterTeam);

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const saveChangeYearHandler = (event) => {
        ctx.onChangeYear(event.target.value);
    };

    const saveChangeTeamHandler = (event) => {
        ctx.onChangeTeam(event.target.value);
    }

    const saveIncreaseMonthHandler = () => {
        ctx.onChangeMonth(true);
    }

    const saveDecreaseMonthHandler = () => {
        ctx.onChangeMonth(false);
    }

    return (
        <div className={`more-margin-bottom ${styles.filter}`}>
            <div className={styles['filter-div']}>
                <select value={ctx.filterTeam} onChange={saveChangeTeamHandler}>
                    {ctx.filterData.map((item) => <option value={item.name} key={item.name}>{item.name}</option>)}
                </select>

            </div>
            <div className={`${styles['filter-div']} text-align-center`}>
                    <button onClick={saveDecreaseMonthHandler}>&lt;</button>
                    <h2 className={`${styles["filter-month-label"]} header`}>{months[ctx.filterMonth]}</h2>
                    <button onClick={saveIncreaseMonthHandler}>&gt;</button>
            </div>
            <div className={`${styles['filter-div']} text-align-right`}>
                <select value={ctx.filterYear} onChange={saveChangeYearHandler}>
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
