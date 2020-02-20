import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    padding: 30px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    background-color: #fff;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    border-radius: 5px;
    padding: 0 15px;
    text-align: center;
    border: 1px solid ${color.preto1};
`;
