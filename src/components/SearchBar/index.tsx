import React from 'react'
import * as S from './styles'

const SearchBar = () => {
  return (
    <S.Container>
        <S.Search placeholder='Por qual pokémon você está procurando?' selectionColor={'#747476'}/>
    </S.Container>
  )
}

export default SearchBar
