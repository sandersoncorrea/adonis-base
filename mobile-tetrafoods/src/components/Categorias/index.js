import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon, { FontAwesome, MaterialIcons } from 'react-native-vector-icons';
import color from '../../styles/palletecolor';

export default function Categorias() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <FontAwesome name="beer" size={50} color={color.azul3} />
                    <TabText>Bebidas</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons
                        name="local-pizza"
                        size={50}
                        color={color.azul3}
                    />
                    <TabText>Massas</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons
                        name="fastfood"
                        size={50}
                        color={color.azul3}
                    />
                    <TabText>Lanches</TabText>
                </TabItem>
                <TabItem>
                    <FontAwesome
                        name="arrow-upward"
                        size={50}
                        color={color.azul3}
                    />
                    <TabText>Doces</TabText>
                </TabItem>
                <TabItem>
                    <FontAwesome name="lock" size={50} color="#FFF" />
                    <TabText>Peixes</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
