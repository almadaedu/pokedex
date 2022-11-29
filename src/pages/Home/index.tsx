import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity, Text } from 'react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import api from '../../services/api'
import Card, { Pokemon, PokemonType } from '../../components/Card'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import pokeballHeader from '../../assets/img/pokeball.png'

type Request = {
  id: number,
  types: PokemonType[]
}

type Sort = {
  a: number,
  b: number
}

const Home = () => {
  const { navigate } = useNavigation<propStack>()
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searchPokemon, setSearchPokemon] = useState('')


  function handleNavigation(pokemonId: number) {
    navigate('Information', {
      pokemonId,
    })
  }

  const handleOrderClick = () => {
    let newList = [...pokemons];
    newList.sort((a, b) =>{
      if(a.name > b.name) {
        return 1;
      } else {
        if(b.name > a.name) {
          return -1;
        } else {
          return 0
        }
      }
    })

    setPokemons(newList)
  }

  useEffect(() => {
    if (searchPokemon === '') {
      setPokemons(pokemons)
    } else {
      setPokemons(
        pokemons.filter((item) => {
          return (item.name.toLowerCase().indexOf(searchPokemon.toLowerCase()) > -1)
        })
      )
    }

  }, [searchPokemon])

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

      } catch (err) {
        Alert.alert("Erro")
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
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader}></S.Header>
            <S.Search
              placeholder='Por qual pokémon está procurando?'
              selectionColor={'#747476'}
              onChangeText={(t) => setSearchPokemon(t)}
              value={searchPokemon}
            />
            <TouchableOpacity onPress={handleOrderClick} style={{ backgroundColor: 'red', alignItems: 'center', height: 30, justifyContent: 'center' }}>
              <Text>Filtrar</Text>
            </TouchableOpacity>
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
  )

}

export default Home