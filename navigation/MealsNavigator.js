import React from 'react'
import {Platform,Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import {Ionicons} from '@expo/vector-icons';

const stackNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail : MealDetailScreen
},
{
defaultNavigationOptions: {
        headerStyle : {
            backgroundColor : 'red'
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
          headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor : 'white'
    }
});

const FavouritesStack = createStackNavigator({
    Favourites : FavouritesScreen,
    MealDetail : MealDetailScreen
},
{  //headerTitleStyle headerBackTitleStyle
defaultNavigationOptions: {
        headerStyle : {
            backgroundColor : 'red'
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
          headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor : 'white'
    }
});

const FilterStack = createStackNavigator({
    Filters : FilterScreen
},{  //headerTitleStyle headerBackTitleStyle
    defaultNavigationOptions: {
            headerStyle : {
                backgroundColor : 'red'
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
              headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor : 'white'
        }
    })

const tabConfig = {
    Meals : {screen : stackNavigator, navigationOptions : {
        tabBarIcon : (tabInfo)=>{
            return <Ionicons name = 'ios-restaurant' 
            size={25} 
            color={tabInfo.tintColor}/>
        },
        tabBarColor : 'red', // when bottom tab meal section is active
        tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        )
    }},
    Favourites : {screen : FavouritesStack , navigationOptions : {
        tabBarIcon : (tabInfo)=>{
            return <Ionicons name = 'ios-star' 
            size={25} 
            color={tabInfo.tintColor}/>
        },
        tabBarColor : 'orange', // when bottom tab fav section is active
        tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold',fontSize : 10 }}>Favourites</Text>
        ) : (
          'Favourites'
        )
        //tabBarLabel : <Text></Text>
    }}
}


const myFavTabNavigator = Platform.OS=='android' ? 
createMaterialBottomTabNavigator(tabConfig,{
    activeTintColor : 'orange',
    shifting: true,
        barStyle: {
          backgroundColor: 'red'
    },
})
:createBottomTabNavigator(tabConfig,{
    tabBarOptions : {
        activeTintColor : '#f5a442',
        labelStyle : {
            fontFamily : 'open-sans'
        }
    }
})

const drawerNavigator = createDrawerNavigator({
    Mealfavs : myFavTabNavigator,
    Filters : FilterStack
},{
    contentOptions : {
        activeTintColor : 'red',
        labelStyle : {
            fontFamily : 'open-sans-bold'
        }
    }
})

export default createAppContainer(drawerNavigator);