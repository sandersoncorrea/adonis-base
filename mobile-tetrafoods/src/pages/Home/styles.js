import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Header = styled.View`
    background: ${color.azul2};
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
`;
export const Container = styled.View`
    flex: 1;
    padding: 30px;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.Text`
    text-align: center;
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    height: 140px;
    width: 190px;
    background: #fff;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 90px;
    text-align: center;
    border: 1px solid ${color.preto1};
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    color: ${color.preto1};
`;
