import React, { Component } from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import { FontAwesome } from 'react-native-vector-icons';
import color from '../../styles/palletecolor';

export default class Categorias extends Component {
    render() {
        const { data, onPress } = this.props;
        return (
            <Container>
                <TabsContainer>
                    {data.map(dt => {
                        return (
                            <TabItem
                                onPress={onPress(dt.codigo)}
                                key={dt.codigo}
                            >
                                <FontAwesome
                                    name="beer"
                                    size={50}
                                    color={color.azul3}
                                />
                                <TabText>{dt.nome}</TabText>
                            </TabItem>
                        );
                    })}
                </TabsContainer>
            </Container>
        );
    }
}
