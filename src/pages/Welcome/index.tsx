import React from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import { Button } from '../../components/Button'
import Background from '../../assets/img/background.png'
import Logo from '../../assets/img/logo.png'
const Welcome = () => {
  const {navigate} = useNavigation<propStack>()

  function handleNavigation() {
    navigate('Home')
  }

  return (
    <S.Container source={Background} blurRadius={2}>
      <S.Header>
        <S.Title source={Logo} />
      </S.Header>
      <S.Content>
      </S.Content>
      <S.Footer>
        <Button title='Entrar' onPress={handleNavigation}/>
        <S.InfoText>Encontre aqui diversos tipos de pokémon</S.InfoText>
      </S.Footer>
    </S.Container>
  )
}

export default Welcome