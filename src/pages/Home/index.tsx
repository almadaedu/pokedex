import React, { Fragment, useEffect, useState } from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import api from '../../services/api'
import Card, { Pokemon, PokemonType } from '../../components/Card'
import { FlatList } from 'react-native-gesture-handler'
import pokeballHeader from '../../assets/img/pokeball.png'
import SearchBar from '../../components/SearchBar'
import { Alert, Text, View } from 'react-native'

type Request = {
  id: number,
  types: PokemonType[]
}

const Home = () => {
  const { navigate } = useNavigation<propStack>()
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [load, setLoad] = useState(true)

  function handleNavigation(pokemonId: number) {
    navigate('Information', {
      pokemonId,
    })
  }

  useEffect(() => {
    async function getAllPokemons() {
      try {
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
        setLoad(false)

      } catch (err) {
        Alert.alert("Erro")
      } finally {
        setLoad(false)
      }


    }

    getAllPokemons()
  }, [])

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api(url)
    const { id, types } = response.data;

    return { id, types }
  }

  return (
    <Fragment>
      {load ?
        <Fragment>
          <View>
            <Text style={{ margin: 20 }}>Carregando</Text>
          </View>
        </Fragment> :
        <S.Container>
          <FlatList
            ListHeaderComponent={
              <>
                <S.Header source={pokeballHeader}></S.Header>
                <SearchBar />
              </>
            }
            contentContainerStyle={{ padding: 20 }}
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
              <Card data={pokemon} onPress={() => {
                handleNavigation(pokemon.id)
              }} />
            )} />
        </S.Container>
      }
    </Fragment>


  )

}

export default Home