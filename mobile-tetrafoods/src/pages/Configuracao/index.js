import React, { Component } from 'react';
import { Header, ButtonSolid, ButtonOutline } from '../../components';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Buttons } from './styles';
import color from '../../styles/palletecolor';

export default class Configuracao extends Component {
    render() {
        return (
            <>
                <Header
                    leftComponent={
                        <Button
                            icon={
                                <Icon
                                    name="chevron-left"
                                    size={20}
                                    color="#FFF"
                                />
                            }
                            type="clear"
                            onPress={() => this.props.navigation.goBack(null)}
                        />
                    }
                />
                <Container>
                    <Input placeholder="IP do servidor e a porta" />
                    <Buttons>
                        <ButtonSolid
                            onPress={this.resetNagivateToItens}
                            color={color.azul3}
                            title="Gravar"
                        />
                        <ButtonOutline
                            onPress={this.resetNagivateToItens}
                            color={color.azul3}
                            title="Cancelar"
                        />
                    </Buttons>
                </Container>
            </>
        );
    }
}
