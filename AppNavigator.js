import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen'
import UseEffect from './src/screens/UseEffect';
import UseState from './src/screens/UseState';
import UseContext from './src/screens/UseContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name="UseState"
                    component={UseState}            
                />
                <Stack.Screen 
                    name="UseEffect"
                    component={UseEffect}        
                />
                <Stack.Screen 
                    name="UseContext"
                    component={UseContext}        
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;