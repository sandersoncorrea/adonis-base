import styled from 'styled-components/native';
import color from '../../styles/palletecolor';

export const Container = styled.View`
    height: 100px;
    margin-top: 10px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 0, paddingRight: 10 },
    showsHorizontalIndicator: false
})``;

export const TabItem = styled.View`
    width: 120px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-right: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${color.azul3};
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: ${color.azul3};
    text-align: center;
`;
