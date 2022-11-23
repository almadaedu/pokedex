import React from 'react'
import { AppRoutes } from './routes'
import { NavigationContainer } from '@react-navigation/native'
const Routes = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}

export default Routes