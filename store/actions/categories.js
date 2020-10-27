export const ADD_CATEGORIES = 'ADD_CATEGORIES';

export const addCategories = (categories)=>{
    return {type : ADD_CATEGORIES , payload : categories}
}