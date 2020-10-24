import React from 'react';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import {useSelector} from'react-redux';
import DefaultText from '../components/DefaultText';

const FavouritesScreen=props=>{

        const MEALS = useSelector(state=>state.meals.favourites)
       
        if (MEALS.length === 0 || !MEALS) {
            return (
              <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
              </View>
            );
          }
        return <MealList meals={MEALS} navigation = {props.navigation}/>
    }


FavouritesScreen.navigationOptions=(navigationData)=>{
    return {
        headerTitle : 'Favourites',
        headerStyle : {
            backgroundColor : 'red'
        },
        headerTintColor : 'white',
        headerLeft :()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu"  iconName='ios-menu' onPress={()=>{
                navigationData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    } 
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default FavouritesScreen;