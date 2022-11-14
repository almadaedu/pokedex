import { View,Text, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components";

export const Container = styled(View)`
    ${({theme}) => css `
        flex: 1;
        padding: 25px ;
        background-color:${theme.backgroundColors.backgroundWelcome} ;
    `} 
`;