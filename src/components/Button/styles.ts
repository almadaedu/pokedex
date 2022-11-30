import { View,Text, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components";

export const LoginButton = styled(TouchableOpacity)`
        ${({theme}) => css `
        background-color: ${theme.backgroundColors.backgroundButton};
        padding: 15px;
        border-radius: 30px;
        align-items: center ;
        margin-bottom: 20px ;
        width: 70% ;
    `} 
`;

export const ButtonText = styled(Text)`
        ${({theme}) => css `
        color: ${theme.textColor.white};
        font-size: 24px ;
        font-weight: bold ;
    `} 
`;