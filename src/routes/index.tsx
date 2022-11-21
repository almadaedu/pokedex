import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import { propsNavigationStack } from './Models'


const Stack = createStackNavigator<propsNavigationStack>()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Home'
                component={Home}/>
        </Stack.Navigator>
    )
}

export default Routes