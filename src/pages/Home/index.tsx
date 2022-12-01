import React, { useEffect, useState } from 'react'
import { Alert, View, Text } from 'react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import api from '../../services/api'
import Card, { Pokemon, PokemonType } from '../../components/Card'
import { FlatList } from 'react-native-gesture-handler'
import pokeballHeader from '../../assets/img/pokeball.png'
import sortNameIcon from '../../assets/img/sort-name.png'

type Request = {
  id: number,
  types: PokemonType[]
}

const Home = () => {
  const { navigate } = useNavigation<propStack>()
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searchPokemon, setSearchPokemon] = useState('')
  const [filteredPokemons, setfilteredPokemons] = useState<Pokemon[]>([])



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

    setfilteredPokemons(newList)
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
        setfilteredPokemons(payloadPokemons)

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

  useEffect(() => {
    if(searchPokemon !== '') {
      setfilteredPokemons(
        pokemons.filter((item) => {
          return (item.name.toLowerCase().indexOf(searchPokemon.toLowerCase()) > -1)
        })
      )
    }

  }, [pokemons, searchPokemon])

  useEffect(() => {
    if (searchPokemon === '' && pokemons.length !== filteredPokemons.length ) {
      setfilteredPokemons(pokemons);
    } 

  }, [filteredPokemons, pokemons, searchPokemon])
  

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.SortNameContainer onPress={handleOrderClick}>
              <S.SortName source={sortNameIcon} />
            </S.SortNameContainer>
            <S.Search
              placeholder='Por qual pokémon está procurando?'
              selectionColor={'#747476'}
              onChangeText={(t) => setSearchPokemon(t)}
              value={searchPokemon}
            />
          </>
        }
        contentContainerStyle={{ padding: 20 }}
        data={filteredPokemons}
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