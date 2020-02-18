import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    flex: 1;
    padding: 20px 10px;
    background-color: ${color.azul2};
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;
`;
