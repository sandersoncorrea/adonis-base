import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    flex: 1;
    padding: 30px 10px 20px 10px;
    background-color: ${color.azul2};
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;

export const Subtitle = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: 200;
    font-size: 18px;
`;
