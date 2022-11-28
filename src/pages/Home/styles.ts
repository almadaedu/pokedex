import { View, ImageBackground, Text } from "react-native";
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