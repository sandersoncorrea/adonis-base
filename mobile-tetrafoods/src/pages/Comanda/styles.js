import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
    background-color: #fff;
`;

export const TotalView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    /* padding-bottom: 10px;
    border-bottom-color: rgba(55, 181, 185, 0.2);
    border-bottom-width: 1px; */
`;

export const Total = styled.View`
    flex-direction: column;
    justify-content: flex-end;
`;

export const Value = styled.Text`
    font-size: 25px;
`;
export const Desc = styled.Text`
    font-size: 10px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    padding-bottom: 5px;
    /* padding-top: 10px;
    border-top-color: rgba(55, 181, 185, 0.2);
    border-top-width: 1px; */
`;
