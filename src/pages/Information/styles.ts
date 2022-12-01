import styled, { css } from "styled-components/native";
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { TypeName } from ".";
import * as Progress from 'react-native-progress'

type TypeProps = {
    type: TypeName
}


export const Header = styled(View) <TypeProps>`
    ${({ theme, type }) => css`
        background-color:${theme.backgroundColors[type]} ;
        height: 330px;
        padding: 20px;
        flex-direction: row;
        align-items: center;
        position: relative;
    `}
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: 70px;
    left: 40px;
`;

export const ContentImage = styled(View)`
    position: relative;
`;

export const CircleImage = styled(Image)`
    width: 125px;
    height: 125px;
    position: absolute;
`;

export const PokemonImage = styled(Image)`
    width: 125px;
    height: 125px;
`;

export const Content = styled(View)`
    margin-left: 30px;
`;

export const PokemonId = styled(Text)`
    ${({ theme }) => css`
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.textColor.number};
    `}
`;

export const PokemonName = styled(Text)`
    ${({ theme }) => css`
        text-transform: capitalize;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        color: ${theme.textColor.white} ;
    `}
`;

export const PokemonTypeContainer = styled(View)`
    flex-direction: row;
`;

export const PokemonType = styled(View) <TypeProps>`
    ${({ theme, type }) => css`
        width: 61px;
        height: 25px;
        background: ${theme.boxType[type]};
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-top: 10px;
    `}
`;

export const PokemonTypeText = styled(Text)`
    ${({ theme }) => css`
        color: ${theme.textColor.white};
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        font-style: normal;
        text-transform: capitalize;
    `}
`;

export const DotsImage = styled(Image)`
    width: 85px;
    height: 50px;
    position: absolute;
    right: -5px;
    top: 220px;
`;

export const Container = styled(View)`
    ${({ theme }) => css`
        flex: 1;
        padding: 20px;
        background-color: ${theme.backgroundColors.backgroundWhite};
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
        margin-top: -40px;
    `}
`;

export const Title = styled(Text)<TypeProps>`
    ${({ theme, type }) => css`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    padding: 20px;
    color: ${theme.boxType[type]};
    `}
`;

export const StatsBar = styled(View)`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Attributes = styled(Text)`
    ${({ theme }) => css`
        font-style: normal;
        font-weight: 500;
        line-height: 14px;
        text-transform: capitalize;
        font-size: 12px;
        color: ${theme.textColor.black};
        width: 110px;
    `}
`;

export const AttributesValue = styled(Text)`
    ${({ theme }) => css`
        font-style: normal;
        margin-left: 20px;
        font-weight: 500;
        line-height: 19px;
        text-transform: capitalize;
        font-size: 16px;
        text-align: right;
        color: ${theme.textColor.grey};
    `}
`;

export const BarContainer = styled(View)`
    align-items: flex-start;
`;

export const AttributesBar = styled(View)`
    margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar)<TypeProps>`
    ${({ theme, type }) => css`
        margin-left: 20px;
    `}
`;

export const Ability = styled(Text)`
    ${({ theme }) => css`
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        text-transform: capitalize;
        font-size: 16px;
        padding: 10px 20px;
        color: ${theme.textColor.grey};
    `}
`;