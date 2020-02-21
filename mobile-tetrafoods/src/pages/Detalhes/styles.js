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

export const ListViewTitle = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const ListViewSubtitle = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const ListViewSubtitleFirst = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 70%;
`;

export const Badges = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TotalView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const Total = styled.View`
    flex-direction: column;
    justify-content: flex-end;
`;

export const Value = styled.Text`
    font-size: 25px;
`;
