import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE,SET_FILTERS} from '../actions/meals';

const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favourites : []
}

const MealReducer = (state = initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE :
            const existingIndex = state.favourites.findIndex(item=> item.id === action.mealId);
            if (existingIndex>=0){
                const updatedFavMeals = [...state.favourites];
                updatedFavMeals.splice(existingIndex,1);
                return {...state,favourites : updatedFavMeals}
            } else {
                const meal = state.meals.find(meal=>meal.id===action.mealId);
                return {...state,favourites : state.favourites.concat(meal)}
            }
        case SET_FILTERS :
            const appliedFilters = action.filters;
            const updatedMeals = state.meals.filter(meal=>{
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                return false;
                }
                return true;
                });
            return { ...state, filteredMeals: updatedMeals };
        default : return state;
    }
    return state;
}

export default MealReducer;