import { View,Text, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components";

export const LoginButton = styled(TouchableOpacity)`
        ${({theme}) => css `
        background-color: ${theme.backgroundColors.backgroundButton};
        padding: 10px;
        border-radius: 10px;
        align-items: center ;
        margin-bottom: 20px ;
        width: 100% ;
    `} 
`;

export const ButtonText = styled(Text)`
        ${({theme}) => css `
        color: ${theme.textColor.darkBlue};
        font-size: 24px ;
        font-weight: 700 ;
    `} 
`;