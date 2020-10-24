import React,{useCallback,useEffect} from 'react';
import {ScrollView,View,Image,Text,StyleSheet} from  'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {useSelector,useDispatch} from'react-redux';
import {toggleFavorite} from '../store/actions/meals';


const ListItem = props=>{
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}

const MealDetailScreen = props=> {
    const mealId = props.navigation.getParam('mealId');
    const MEALS = useSelector(state=>state.meals.meals);
    const Meal = MEALS.find(meal=>meal.id===mealId);

    const dispatch = useDispatch();

    const togglefavHandler = useCallback(()=>{
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId]);

    useEffect(()=>{
        props.navigation.setParams({togglefavorite : togglefavHandler});
    },[togglefavHandler])

    return (
        <ScrollView>
            <Image source={{uri : Meal.imageUrl}} style={styles.Image}/>
            <View>
                <View style={styles.Details}>
                    <DefaultText>{Meal.duration}m</DefaultText>
                    <DefaultText>{Meal.complexity}</DefaultText>
                    <DefaultText>{Meal.affordability}</DefaultText>
                </View>
            </View>
            <Text style={styles.Text}>Ingredients</Text>
            {Meal.ingredients.map(ingredient=>{
                return <ListItem key={ingredient}>{ingredient}</ListItem>
            })}
            <Text style={styles.Text}>Steps</Text>
            <View style={styles.stepsContainer}>
                {Meal.steps.map(step=>{
                    return <DefaultText key={step}>{step}</DefaultText>
                })}
            </View>
        </ScrollView>
    );
}


MealDetailScreen.navigationOptions = (navigationData)=>{

    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const favhandler = navigationData.navigation.getParam('togglefavorite');
    const isFavorite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle : mealTitle,
        headerRight : ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' 
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
            onPress={favhandler}/>
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    Image : {
        width : '100%',
        height : 200
    },
    Details : {
        flexDirection : 'row',
        padding : 15,
        justifyContent : 'space-around'
    },
    Text:{
        fontSize : 20,
        fontFamily : 'open-sans-bold',
        textAlign : 'center'
    },
    listItem : {
        margin : 10,
        borderColor : 'black',
        borderRadius : 10,
        padding : 10,
        borderWidth : 1
    },
    stepsContainer : {
        flex : 1,
        margin : 10,
        backgroundColor : '#E0E0E0',
        borderRadius : 10,
        padding : 10,
        borderWidth : 1
    }
})

export default MealDetailScreen;