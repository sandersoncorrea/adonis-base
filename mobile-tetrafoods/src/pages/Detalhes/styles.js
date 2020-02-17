import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #fff;
`;

export const Title = styled.Text`
    text-align: center;
    color: ${color.preto1};
    font-size: 24px;
    font-weight: bold;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 70%;
`;
