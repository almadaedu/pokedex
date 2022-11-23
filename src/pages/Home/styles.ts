import { View, ImageBackground, Text } from "react-native";
import styled, {css} from "styled-components";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width

export const Container = styled(View)`
    ${({theme}) => css `
        flex: 1;
        background-color:${theme.backgroundColors.backgroundWelcome} ;
    `} 
`;

export const Header = styled(ImageBackground)`
    ${({theme}) => css `
        height: 220px;
        width: ${windowWidth}px;
        margin-left: -20px;
        background-color:${theme.backgroundColors.backgroundWelcome}
    `} 
`;

export const Title = styled(Text)`
    ${({theme}) => css `
        font-size: 32px;
        line-height: 38px;
        font-weight: bold;
        color: ${theme.textColor.goldYellow};
    `} 
`;