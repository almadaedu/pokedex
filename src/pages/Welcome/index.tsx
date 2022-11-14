import React from 'react'
import pokemonAnimation from '../../global/Images/swablu.json'
import AnimatedLottieView from 'lottie-react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
const Welcome = () => {
  const navigation = useNavigation<propStack>()
  return (
    <S.Container>
      <S.Header>
        <S.UpperTitle>Boas vindas à</S.UpperTitle>
        <S.Title>Pokédex</S.Title>
      </S.Header>
      <S.Content>
          <AnimatedLottieView source={pokemonAnimation} autoPlay={true} resizeMode={'cover'} loop={true} style={{ width: 400, height: 350 }} />
      </S.Content>
      <S.Footer>
        <S.LoginButton>
          <S.ButtonText onPress={() =>navigation.navigate('Home')}>Entrar</S.ButtonText>
        </S.LoginButton>
        <S.InfoText>Encontre aqui diversos tipos de pokémon</S.InfoText>
      </S.Footer>
    </S.Container>
  )
}

export default Welcome