import React, { Component } from 'react';
import { Image } from 'react-native';
import { Input, Container } from './styles';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    resetNagivateToHome = () => {
        console.log('resetNagivateToHome');
        const { navigation } = this.props;
        navigation.navigate('Home');
    };

    render() {
        return (
            <Container>
                <Image source={require('../../../assets/minhaempresa.png')} />
                <Input
                    placeholder="Usuário"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input
                    placeholder="Senha"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="send"
                    onSubmitEditing={this.resetNagivateToHome}
                />
                <Button
                    containerStyle={{
                        marginTop: 20
                    }}
                    buttonStyle={{ backgroundColor: color.azul3 }}
                    title="Entrar"
                    titleStyle={{
                        textAlign: 'center',
                        backgroundColor: color.azul3
                    }}
                    onPress={this.resetNagivateToHome}
                />
                <Button
                    title="Esqueci minha senha"
                    type="clear"
                    titleStyle={{
                        color: color.preto2,
                        fontWeight: 'normal',
                        fontSize: 10
                    }}
                />
            </Container>
        );
    }
}

export default Login;
