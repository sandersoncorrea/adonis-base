import React, { Component } from 'react';
import { Image } from 'react-native';
import { Input, Container } from './styles';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import { ButtonSolid, ButtonClear, InputSolid } from '../../components';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    resetNagivateToHome = () => {
        const { navigation } = this.props;
        navigation.navigate('Home');
    };

    render() {
        return (
            <Container>
                <Image source={require('../../../assets/minhaempresa.png')} />
                <InputSolid placeholder="Usuário" />
                <InputSolid
                    placeholder="Senha"
                    onSubmitEditing={this.resetNagivateToHome}
                />
                <ButtonSolid
                    color={color.azul3}
                    onPress={this.resetNagivateToHome}
                    title="Entrar"
                />
                <ButtonClear title="Esqueci minha senha" color={color.preto2} />
            </Container>
        );
    }
}

export default Login;
