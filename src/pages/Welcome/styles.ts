import { View,Text, TouchableOpacity, ImageBackground, Image, TextInput } from "react-native";
import styled, {css} from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled(ImageBackground)`
    ${({theme}) => css `
        flex: 1;
        padding: 25px
    `} 
`;

export const Header = styled(View)`
    height: 25%;
    padding: 30px 0;
`;

export const Content = styled(View)`
   justify-content: center;
   align-self: center;
   padding: 10px 0;
   height: 45%;
`;

export const Input = styled(TextInput)`
    width: 200px;
    height: 40px;
    border-bottom: 4px;
    background-color: blueviolet;
`;

export const Title = styled(Image)`
    height: 100px;
    width: 300px;
    margin: 15px;
`;

export const Footer = styled(View)`
    justify-content: center;
    align-items: center;
    height: 30%;
`;

export const InfoText = styled(Text)`
    ${({theme}) => css `
        color: ${theme.textColor.rockWhite};
        font-size: 16px ;
    `} 
`;