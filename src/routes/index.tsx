import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import { propsNavigationStack } from './Models'
import Information from '../pages/Information'


const Stack = createStackNavigator<propsNavigationStack>()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
            <Stack.Screen
                name='Welcome'
                component={Welcome}/>
            <Stack.Screen
                name='Home'
                component={Home}/>
            <Stack.Screen
                name='Information'
                component={Information}/>
        </Stack.Navigator>
    )
}

export default Routes