import React, { Component } from 'react';
import { Container, Title, Buttons } from './styles';
import { ButtonClear } from '../../components';

export default class ModalDetalhes extends Component {
    render() {
        const { onPressSim, onPessNao } = this.props;
        return (
            <Container>
                <Title>Deseja abandonar esses novos itens?</Title>
                <Buttons>
                    <ButtonClear title="Sim" onPress={onPressSim} />
                    <ButtonClear title="Nao" onPress={onPessNao} />
                </Buttons>
            </Container>
        );
    }
}
