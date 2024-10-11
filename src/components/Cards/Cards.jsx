import Card from "./Card/Card.jsx";
import classes from "./Cards.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchCategoriesWithMeals} from "../../store/slices/getCategories.js";

const Cards = () => {
    const dispatch = useDispatch();
    const {categories, loading, error} = useSelector((state) => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategoriesWithMeals());
    }, [dispatch]);

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories.find(category => category.id === 2));
        }
    }, [categories]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className={classes.cards}>
            <section>
                <div className={classes.title}>
                    <h1>Menu</h1>
                    <span className={classes.small_line}></span>
                </div>
                <ul className={classes.categories}>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                                className={selectedCategory && selectedCategory.id === category.id ? classes.active : ''}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {selectedCategory && selectedCategory.meals.length > 0 && (
                <div style={{height: '100%', padding: "30px 0 60px"}} className={classes.cards_cont}>
                    <ul className={classes.cont}>
                        {selectedCategory.meals.map((meal) => (
                            <li key={meal.id}>
                                <Card title={meal.name} price={meal.price} image={meal.picture}/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
};

export default Cards;
