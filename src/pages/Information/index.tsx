import { View, Text } from 'react-native'
import React from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'

type RouteParams = {
  pokemonId: number
}

const Information = () => {
  const route = useRoute();
  const {pokemonId} = route.params as RouteParams;
  
  return (
    <View>
      <Text style={{margin: 100}}>{pokemonId}</Text>
    </View>
  )
}

export default Information