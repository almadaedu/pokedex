import React from 'react'
import pokemonAnimation from '../../global/Images/swablu.json'
import AnimatedLottieView from 'lottie-react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import { Button } from '../../components/Button'
const Welcome = () => {
  const {navigate} = useNavigation<propStack>()

  function handleNavigation() {
    navigate('Home')
  }

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
        <Button title='Entrar' onPress={handleNavigation}/>
        <S.InfoText>Encontre aqui diversos tipos de pokémon</S.InfoText>
      </S.Footer>
    </S.Container>
  )
}

export default Welcome