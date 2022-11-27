import { View, Text, Alert, ScrollView } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useTheme } from "styled-components";
import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import circle from "../../assets/img/circle.png";
type RouteParams = {
  pokemonId: number;
};

type Stats = {
  base_stat: 62;
  stat: {
    name: string;
  };
};

type Ability = {
  ability: {
    name: string;
  };
};

export type TypeName =
  | "bug"
  | "black"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

type PokemonType = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Ability[];
  color: string;
  types: PokemonType[];
};

const Information = () => {
  const Route = useRoute();
  const { pokemonId } = Route.params as RouteParams;
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const response = await api.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );

        const { stats, abilities, id, name, types } = response.data;

        console.log(pokemon.abilities);

        const currentType = types[0].type.name as TypeName;

        const color = colors[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });

        setLoad(false)

      } catch (err) {
        Alert.alert("Erro");
      } finally {
        setLoad(false)
      }
    }

    getPokemonDetails();
  }, [pokemonId]);

  return (
    <Fragment>
      {load ?
        <Fragment>
          <Text style={{margin: 20}}>Carregando</Text>
        </Fragment> :
        <ScrollView style={{ flex: 1 }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton>
              <Feather name="chevron-left" size={24} color="#fff" />
            </S.BackButton>

            {/* <S.ContentImage>
              <S.CircleImage source={circle}/>
              <S.PokemonImage source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}/>
            </S.ContentImage> */}
          </S.Header>
        </ScrollView>

      }
    </Fragment>

  );
};

export default Information;
