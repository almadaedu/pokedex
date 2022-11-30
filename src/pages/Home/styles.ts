import { View, ImageBackground, TextInput, Image, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components";

export const Container = styled(View)`
    ${({theme}) => css `
        flex: 1;
        background-color:${theme.backgroundColors.backgroundWelcome} ;
    `} 
`;

export const Header = styled(ImageBackground)`
    ${({theme}) => css `
        height: 150px;
        width: 300px;
        margin-left: 23px;
        margin-bottom: -50px;
        background-color:${theme.backgroundColors.backgroundWelcome};
    `} 
`;


export const Search = styled(TextInput)`
        ${({theme}) => css`
        background-color:${theme.customColor.input} ;
        height: 60px;
        margin: 7px;
        margin-top: 70px;
        border-radius: 10px;
        padding: 20px 25px;
        width: 310px;
    `}
`;

export const SortNameContainer = styled(TouchableOpacity)`
    ${({theme}) => css`
        height: 30px;
        width: 30px;
        position: absolute;
        right: -5px;
        bottom: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    `}
`;

export const SortName = styled(Image) `
    width: 30px;
    height: 30px;

`;