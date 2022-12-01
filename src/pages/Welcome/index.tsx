import React from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { propStack } from '../../routes/Models'
import { Button } from '../../components/Button'
import Logo from '../../assets/img/logo.png'
import { LinearGradient } from 'expo-linear-gradient';
import Cloud from '../../assets/img/cloud.png'
import Lugia from '../../assets/img/lugia.png'

const Welcome = () => {
  const { navigate } = useNavigation<propStack>()

  function handleNavigation() {
    navigate('Home')
  }

  return (
    <S.Container>
      <LinearGradient
        colors={['#16296f', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      <S.Header>
        <S.Cloud source={Cloud}/>
        <S.Title source={Logo} />
      </S.Header>
      <S.Content>
        <S.Lugia source={Lugia} />
      </S.Content>
      <S.Footer>
        <Button title='Entrar' onPress={handleNavigation} />
        <S.InfoText>Encontre aqui diversos tipos de pokémon</S.InfoText>
      </S.Footer>

    </S.Container>
  )
}

export default Welcome