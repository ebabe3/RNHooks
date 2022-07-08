import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UseEffect from './screens/UseEffect';
import UseState from './screens/UseState';

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;