import React from 'react';
import {useSelector} from'react-redux'
import MealList from '../components/MealList';
import {View,StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen =props=>{
    const catId = props.navigation.getParam('id');
    const availiableMeals = useSelector(state => state.meals.filteredMeals);
    const meals = availiableMeals.filter(meal=>meal.categoryIds.indexOf(catId) >=0);

    if (meals.length === 0) {
        return (
          <View style={styles.content}>
            <DefaultText>No meals found, maybe check your filters?</DefaultText>
          </View>
        );
      }

    return <MealList meals={meals} navigation = {props.navigation}/>
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');
  
    return {
        headerTitle : title
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default CategoryMealsScreen;