import { View, ImageBackground, TextInput } from "react-native";
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
        background-color:${theme.backgroundColors.backgroundWelcome}
    `} 
`;


export const Search = styled(TextInput)`
        ${({theme}) => css`
        background-color:${theme.customColor.input} ;
        height: 60px;
        margin: 12px;
        margin-top: 70px;
        border-radius: 10px;
        padding: 20px 25px;
    `}
`;