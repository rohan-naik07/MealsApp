import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from  'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {useSelector,useDispatch} from 'react-redux';
import {AppLoading} from 'expo';
import {addCategories} from '../store/actions/categories';
import {CATEGORIES} from '../data/dummy-data'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';


const CategoriesScreen = props =>{
    const [categories,setCategories] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        fetch('http://192.168.1.102:3000/categories')
        .then(response=>{
            setLoad(true);
            if(response.ok){
                return response
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; 
            }},
            error => {   
                setLoad(true);      // if server doesnt respond
                setError(error.message)
            })
        .then(response => response.json())
        .then(CATEGORIES=> setCategories(CATEGORIES))
        .catch(error =>{
            setLoad(true);
            console.log(error);
            setError(error.message)
        });
    },[])

    const renderDataItem = (itemData)=> {
        return (
            <CategoryGridTile title={itemData.item.title}
            color = {itemData.item.color}
            onSelect={()=>{
                    props.navigation.navigate({
                        routeName : 'CategoryMeals',
                        params : {
                            title : itemData.item.title
                        }
                    })
                }
            }/>

        );
    }

    if(load){
        if(error){
            return <Text>{error}</Text>
        }
        else{
            return (
                <FlatList data={categories}
                renderItem ={renderDataItem}
                numColumns = {2}/>
            );
        }
    } else{
        return <Text style={styles.screen}>Loading...</Text>
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