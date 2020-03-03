import styled from 'styled-components/native';

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
`;

export const Total = styled.View`
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
`;

export const Value = styled.Text`
    font-size: 25px;
    text-align: right;
`;
export const Desc = styled.Text`
    font-size: 10px;
    text-align: right;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    padding-bottom: 5px;
`;
