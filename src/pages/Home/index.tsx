import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import api from '../../services/api'
import Card, { Pokemon, PokemonType } from '../../components/Card'
import { FlatList } from 'react-native-gesture-handler'
import pokeballHeader from '../../assets/img/pokeball.png'

type Request = {
  id: number,
  types: PokemonType[]
}

const Home = () => {
  const {navigate} = useNavigation<propStack>()
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  function handleNavigation(pokemonId: number) {
    navigate('Information', {
      pokemonId,
    })
  }
  
  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon')
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url)

          return {
            name: pokemon.name,
            id,
            types,
          }

        })

      )
      setPokemons(payloadPokemons)

    }

    getAllPokemons()
  }, [])

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api(url)
    const { id, types } = response.data;

    return { id, types }
  }

  return (

    <S.Container>
      <FlatList
      ListHeaderComponent={
        <>
        <S.Header source={pokeballHeader}></S.Header>
        <S.Title>Pokédex</S.Title>
        </>
      }
      contentContainerStyle={{padding: 20}} 
      data={pokemons}
      keyExtractor={pokemon => pokemon.id.toString()}
      renderItem={({item: pokemon})=> (
          <Card data={pokemon} onPress={() =>{
            handleNavigation(pokemon.id)
          }}/>
      )}/>
    </S.Container>
  )

}

export default Home