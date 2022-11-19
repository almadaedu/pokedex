import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import dotsImage from '../../assets/img/dots.png'
import * as S from './styles'

export type PokemonType = {
  type: {
    name: string;
  }
}

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

type Props = {
  data: Pokemon
} & TouchableOpacityProps


const Card = ({ data, ...rest }: Props) => {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageDots source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map(pokemonType => 
          <S.PokemonType type={pokemonType.type.name}>
            <S.PokemonTypeText key={pokemonType.type.name}>
              {pokemonType.type.name}
            </S.PokemonTypeText>
          </S.PokemonType>
          )}

        </S.PokemonContentType>
      </S.LeftSide>

      {/* <S.RightSide></S.RightSide> */}
    </S.PokemonCard>
  )
}

export default Card