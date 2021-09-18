import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import loginscreen from './screens/loginscreen'
import physicsscreen from './screens/physicsscreen'
import mathsscreen from './screens/mathsscreen'
import englishscreen from './screens/englishscreen';
import bioligyscreen from './screens/bioligyscreen';
import chemistryscreen from './screens/chemistryscreen';


export default class App extends React.Component{
    render(){
        return(
            <View>
                <AppContainer/>
                </View>
        );
    }
    }

var AppNavigator = createSwitchNavigator({
    loginscreen:loginscreen,
    physicsscreen:physicsscreen,
    mathsscreen:mathsscreen,
    englishscreen:englishscreen,
    bioligyscreen:bioligyscreen,
    chemistryscreen:chemistryscreen
});


const AppContainer = createAppContainer(AppNavigator);