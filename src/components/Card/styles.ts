import { Image, Text, TouchableOpacity, View } from "react-native";
import styled, {css} from "styled-components/native";

type PokemonTypeName = {
    type: string
}

export const PokemonCard = styled(TouchableOpacity)<PokemonTypeName>`
    ${({theme, type}) => css `
        background-color:${theme.backgroundColors[type]} ;
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row ;
        padding: 20px ;
    `} 
`;

export const LeftSide = styled(View)`
    width: 50%;
    position: relative ;
`;

export const ImageDots = styled(Image)`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: 5px;
`;

export const PokemonId = styled(Text)`
    ${({theme}) => css `
        font-weight: bold;
        font-size: 15px;
        line-height:14px;
        color:${theme.textColor.number} ;
        padding: 4px ;
    `} 
`;

export const PokemonName = styled(Text)`
    ${({theme}) => css `
        color:${theme.textColor.white} ;
        font-weight: bold;
        font-size: 25px;
        line-height:31px;
        margin-top: 5px;
        text-transform: capitalize ;
    `} 
`;

export const PokemonContentType = styled(View)`
    flex-direction: row ;
`;

export const PokemonType = styled(View)<PokemonTypeName> `
    ${({theme, type}) => css `
        background-color:${theme.colors[type]} ;
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`;

export const PokemonTypeText = styled(Text)`
    ${({theme}) => css `
        color:${theme.textColor.white} ;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize ;
    `} 
`;