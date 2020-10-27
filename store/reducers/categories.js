const initialState = {
    categories: []
}

const CategoryReducer = (state = initialState,action)=>{
    return {...state,categories : action.payload}
}

export default CategoryReducer;
