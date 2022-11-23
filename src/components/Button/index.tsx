import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'


type Props = {
    title: string;
} & TouchableOpacityProps


export function Button ({ title, ...rest }: Props) {
    return (
        <S.LoginButton {...rest}>
            <S.ButtonText>{title}</S.ButtonText>
        </S.LoginButton>
    )
}