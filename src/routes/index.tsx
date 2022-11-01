import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Routes