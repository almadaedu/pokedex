import { View,Text, Image } from "react-native";
import styled, {css} from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled(View)`
    ${({theme}) => css `
        flex: 1;
        background-color: ${theme.backgroundColors.backgroundWelcome};
    `} 
`;

export const Header = styled(View)`
    height: 30%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(View)`
   height: 43%;
   align-self: center;
   justify-content: center;
`;

export const Title = styled(Image)`
    width: 300px;
    height: 100px;
    margin-top: 80px;
`;

export const Pokeball = styled(Image)`
    width: 100px;
    height: 100px;
`;

export const Lugia = styled(Image)`
    width: 250px;
    height: 250px;
    margin-bottom: 60px;
`;

export const Cloud = styled(Image)`
    position: absolute;
    top: 30px;
    left: 45px;
    width: 270px;
    height: 270px;
`;

export const Footer = styled(View)`
    height: 27%;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: ${theme.backgroundColors.black};
`;

export const InfoText = styled(Text)`
    ${({theme}) => css `
    font-size: 16px ;
    color: ${theme.textColor.rockWhite};
    `} 
`;