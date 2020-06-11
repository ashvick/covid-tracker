import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tracker from "./Tracker";

const Tab = createBottomTabNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Tracker" component={Tracker} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    pink: {
        flex: 1,
        backgroundColor: 'pink',
    },
    blue: {
        flex: 1,
        backgroundColor: 'blue',
    },
    yellow: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    red: {
        flex: 1,
        backgroundColor: 'red',
    }
});

export default App;