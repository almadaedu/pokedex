import { View, TextInput } from "react-native";
import styled, {css} from "styled-components";


export const Container = styled(View)`

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