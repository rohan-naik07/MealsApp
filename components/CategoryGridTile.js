import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform,TouchableNativeFeedback} from  'react-native';

const CategoryGridTile = (props)=>{
    let Touchable = TouchableOpacity;
    if(Platform.OS=='android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback ;
    }
    return(
        <View style={styles.gridItem}>
            <Touchable
                style = {{flex : 1}}
                onPress={props.onSelect}>
                <View style={{...styles.gridItemContainer,...{backgroundColor : props.color}}}>
                    <Text numberOfLines={2}>{props.title}</Text>
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex : 1,
        margin : 15,
        height : 150,
        borderRadius : 10,
    },
    gridItemContainer : {
        flex : 1,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOffset : {width : 0,height : 2},
        shadowOpacity : 0.26,
        shadowRadius : 10,
        elevation : 5,
        justifyContent : 'flex-end',
        padding : 5
    },
    text: {
        fontFamily : 'open-sans'
    }

})

export default CategoryGridTile;