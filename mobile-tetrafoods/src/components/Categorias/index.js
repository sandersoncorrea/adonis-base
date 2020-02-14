import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../styles/palletecolor';

export default function Categorias() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color={color.azul3} />
                    <TabText>Bebidas</TabText>
                </TabItem>
                <TabItem>
                    <Icon
                        name="chat-bubble-outline"
                        size={24}
                        color={color.azul3}
                    />
                    <TabText>Massas</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color={color.azul3} />
                    <TabText>Lanches</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color={color.azul3} />
                    <TabText>Doces</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Peixes</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
