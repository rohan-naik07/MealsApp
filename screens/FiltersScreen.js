import React,{useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,Switch} from  'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/HeaderButton';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props=>{
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch value={props.state} 
            trackColor={{true : 'yellow'}}
            thumbColor = {{true : 'blue'}}
            onValueChange={props.onChange}/>
        </View>
    )
};


/*
class FilterScreen extends React.Component{
    constructor(props){
        super (props);
        this.state = { 
            isGlutenFree : false,
            isLactoseFree : false,
            isVegan : false,
            isVegetarian : false
        }
        this.setisGlutenFree = this.setisGlutenFree.bind(this);
        this.setisLactoseFree = this.setisLactoseFree.bind(this);
        this.setisVegan = this.setisVegan.bind(this);
        this.setIsVegetarian = this.setIsVegetarian.bind(this);
        this.saveFilters = this.saveFilters.bind(this);
    }
    setisGlutenFree(newValue){
        this.setState({
            isGlutenFree : newValue
        })
    }
    setisLactoseFree(newValue){
        this.setState({
            isLactoseFree : newValue
        })
    }
    setisVegan(newValue){
        this.setState({
            isVegan : newValue
        })
    }
    setIsVegetarian(newValue){
        this.setState({
            isVegetarian : newValue
        })
    }
    saveFilters(){
        const appliedFilters = {
            glutenFree : this.state.isGlutenFree,
            lactoseFree : this.state.isLactoseFree,
            vegan : this.state.isVegan,
            Vegetarian : this.state.isVegetarian
        }
        console.log(appliedFilters);   
    }

    componentDidMount(){
        this.props.navigation.setParams({save : this.saveFilters});
    }
    componentDidUpdate(){
        this.props.navigation.setParams({save : this.saveFilters});
    }

    render(){
        return (
        <View style = {styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                state={this.state.isGlutenFree}
                onChange={newValue => this.setisGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={this.state.isLactoseFree}
                onChange={newValue => this.setisLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={this.state.isVegan}
                onChange={newValue => this.setisVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={this.state.isVegetarian}
                onChange={newValue => this.setIsVegetarian(newValue)}
            />
        </View>
        );
    }
}
*/

const FilterScreen = props => {
    const { navigation } = props;
  
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const dispatch = useDispatch();
  
    const saveFilters = useCallback(() => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        vegetarian: isVegetarian
      };
  
      dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch]);
  
    useEffect(() => {
      navigation.setParams({ save: saveFilters });
    }, [saveFilters]);
  
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten-free"
          state={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
      </View>
    );
  };
    FilterScreen.navigationOptions = (navData)=>{
        return {
            headerTitle : 'Filter Meals',
            headerLeft :()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu"  iconName='ios-menu' onPress={()=>{
                        navData.navigation.toggleDrawer();
                    }}/>
                </HeaderButtons>,
            headerRight : ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Save' iconName='ios-save' onPress={()=>{
                        console.log('Item Saved');
                        console.log(navData.navigation.getParam('save')())
                    }}/>
                </HeaderButtons>,
        }
    }

const styles = StyleSheet.create({
    screen : {
        flex :1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
      },
    filterContainer : {
        marginVertical : 10,
        borderWidth : 1,
        borderRadius : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '80%',
        height : '10%',
        paddingLeft : 10
    }
})

export default FilterScreen;