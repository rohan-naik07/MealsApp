import React from 'react';
import {View,StyleSheet} from  'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList =props => {
    const favoriteMeals = useSelector(state => state.meals.favourites);
    const renderMealsItem = (itemData)=>{
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem title={itemData.item.title}
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability.toUpperCase()}
            image={itemData.item.imageUrl}
            onSelectItem={()=>{
                props.navigation.navigate({
                    routeName : 'MealDetail',
                    params : {
                        mealId : itemData.item.id,
                        mealTitle : itemData.item.title,
                        isFav: isFavorite
                    }
                })
           }}/>
        );
    }

    return (
        <View style = {styles.screen}>
            <FlatList data={props.meals} 
            style = {{width : '100%'}}
            renderItem={renderMealsItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex :1,
        justifyContent : 'center',
        alignItems: 'center',
    }

})

export default MealList;