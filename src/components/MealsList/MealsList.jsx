import classes from './MealsList.module.scss';
import Card from "../Cards/Card/Card.jsx";

// eslint-disable-next-line react/prop-types
const MealsList = ({ meals }) => (
    <div style={{ height: '100%', padding: '30px 0 60px' }} className={classes.cards_cont}>
        <ul className={classes.cont}>
            {/* eslint-disable-next-line react/prop-types */}
            {meals.map((meal) => (
                <li key={meal.id}>
                    <Card title={meal.name} price={meal.price} image={meal.picture} />
                </li>
            ))}
        </ul>
    </div>
);

export default MealsList;
