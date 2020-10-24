import React from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,ImageBackground} from  'react-native';

const MealItem = (props)=>{
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={props.onSelectItem}>
            <View>
                <View style={{...styles.mealrow,...styles.mealHeader}}>
                    <ImageBackground source={{uri : props.image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View>
                <View style={{...styles.mealrow,...styles.mealDetail}}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity}</Text>
                    <Text>{props.affordability}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        height : 200,
        backgroundColor: '#f5f5f5',
        margin : 10,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOffset : {width : 0,height : 2},
        shadowOpacity : 0.26,
        shadowRadius : 10,
        elevation : 5,
        overflow : 'hidden',
        justifyContent : 'flex-end'
    },
    bgImage: {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end'
    },
    mealrow : {
        flexDirection : 'row',
    },
    mealHeader : {
        height : '90%'
    },
    mealDetail : {
        paddingHorizontal : 10,
        justifyContent: 'space-between',
        alignItems : 'center',
        height : '10%'
    },
    titleContainer: {
        width : '100%',
        backgroundColor : 'rgba(0,0,0,0.6)',
        padding : 5
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 10,
        color : 'white',
        textAlign : 'center'
    }
})

export default MealItem;

