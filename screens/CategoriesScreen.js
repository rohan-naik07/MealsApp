import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from  'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';


class CategoriesScreen extends React.Component{

    constructor(props){
        super(props); 
        this.renderDataItem = this.renderDataItem.bind(this);
    }

    renderDataItem(itemData) {
        return (
            <CategoryGridTile title={itemData.item.title}
            color = {itemData.item.color}
            onSelect={()=>{
                    this.props.navigation.navigate({
                        routeName : 'CategoryMeals',
                        params : {
                            id : itemData.item.id
                        }
                    })
                }
            }/>

        );
    }
    render(){
        return (
            <FlatList data={CATEGORIES}
            renderItem ={this.renderDataItem}
            numColumns = {2}/>
        );
    }
}

CategoriesScreen.navigationOptions = (navigationData)=>{
    return {
        headerTitle : 'Meal Categories',
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
    screen : {
        flex :1,
        justifyContent : 'center',
        //alignItems: 'center'  
    }
})

export default CategoriesScreen;