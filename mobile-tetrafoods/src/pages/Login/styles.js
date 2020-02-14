import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    justify-content: center;
    align-content: center;
`;

export const Input = styled.TextInput`
    background: #fff;
    border-radius: 5px;
    padding: 0 15px;
    text-align: center;
    border: 1px solid ${color.preto1};
`;
