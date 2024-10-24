// Cards.jsx
import  {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesWithMeals} from '../../store/slices/getCategories.js';
import classes from './Cards.module.scss';
import './swiperCategories.scss';
import LoadingError from "../UI/LoadingError/LoadingError.jsx";
import CategorySlider from "../CategorySlider/CategorySlider.jsx";
import MealsList from "../MealsList/MealsList.jsx";

const Cards = () => {
    const dispatch = useDispatch();
    const {categories, loading, error} = useSelector((state) => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategoriesWithMeals());
    }, [dispatch]);

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0]);
        }
    }, [categories]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <main className={classes.cards} id="menu">
            <section>
                <div className={classes.title}>
                    <h1>Menu</h1>
                    <div className={classes.small_line}></div>
                </div>
            </section>

            <LoadingError loading={loading} error={error}/>

            {!loading && !error && (
                <CategorySlider
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategoryClick}
                />
            )}

            {selectedCategory && selectedCategory.meals.length > 0 && (
                <MealsList meals={selectedCategory.meals}/>
            )}
        </main>
    );
};

export default Cards;
