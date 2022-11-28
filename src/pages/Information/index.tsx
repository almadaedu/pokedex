import { View, Text, Alert, ScrollView } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useTheme } from "styled-components";
import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import circle from "../../assets/img/circle.png";
import FadeAnimation from "../../components/FadeAnimation";
import dotsImage from '../../assets/img/dots.png'


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
  const { backgroundColors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);
  const { goBack } = useNavigation();

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const response = await api.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );

        const { stats, abilities, id, name, types } = response.data;

        console.log(pokemon.abilities);

        const currentType = types[0].type.name as TypeName;

        const color = backgroundColors[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });

        setLoad(false);
      } catch (err) {
        Alert.alert("Erro");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetails();
  }, [pokemonId]);

  function handleGoBack() {
    goBack();
  }

  return (
    <Fragment>
      {load ? (
        <Fragment></Fragment>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton onPress={handleGoBack}>
              <Feather name="chevron-left" size={24} color="#fff" />
            </S.BackButton>
            <S.ContentImage>
              <S.CircleImage source={circle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>

            <S.Content>
              <S.PokemonId>#{pokemon.id}</S.PokemonId>
              <S.PokemonName>{pokemon.name}</S.PokemonName>
              <S.PokemonTypeContainer>
                {pokemon.types.map(({ type }) =>
                  <S.PokemonType type={type.name} key={type.name}>
                    <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                  </S.PokemonType>)}
              </S.PokemonTypeContainer>
            </S.Content>
            <S.DotsImage source={dotsImage} />
          </S.Header>

          <S.Container>
            <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>
            {pokemon.stats.map(attribute =>
                <S.StatsBar key={attribute.stat.name}>
                    <S.Attributes>{attribute.stat.name}:</S.Attributes>
                    <S.AttributesValue>{attribute.base_stat}</S.AttributesValue>
                    <S.BarContainer>
                      <S.AttributesBar>
                        <S.ProgressBar
                        type={pokemon.types[0].type.name}
                        progress={200}
                        borderWidth={0}
                        width={attribute.base_stat}
                        color = {pokemon.color}
                        />
                      </S.AttributesBar>
                    </S.BarContainer>
                </S.StatsBar>

            )}
            <S.Title type={pokemon.types[0].type.name}>Abilities</S.Title>
              {pokemon.abilities.map(currentAbility => 
              <S.Ability>
                {currentAbility.ability.name}
              </S.Ability>
                )}
          </S.Container>
        </ScrollView>
      )}
    </Fragment>
  );
};

export default Information;
