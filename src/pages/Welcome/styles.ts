import { View,Text, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components";

export const Container = styled(View)`
    ${({theme}) => css `
        flex: 1;
        padding: 25px ;
        background-color:${theme.backgroundColors.backgroundWelcome} ;
    `} 
`;

export const Header = styled(View)`
    height: 20%;
    padding: 30px 0 ;
`;

export const UpperTitle = styled(Text)`
    ${({theme}) => css `
        color: ${theme.textColor.rockWhite};
        font-size: 18px ;
    `} 
`;

export const Title = styled(Text)`
    ${({theme}) => css `
        font-size: 42px ;
        font-weight: 700 ;
        color: ${theme.textColor.goldYellow};
    `} 
`;
export const Content = styled(View)`
   justify-content: center;
   align-self: center;
   padding: 10px 0;
   height: 45%;
`;

export const Footer = styled(View)`
    justify-content: center;
    align-items: center;
    height: 40%;
`;

export const InfoText = styled(Text)`
    ${({theme}) => css `
        color: ${theme.textColor.rockWhite};
        font-size: 16px ;
    `} 
`;