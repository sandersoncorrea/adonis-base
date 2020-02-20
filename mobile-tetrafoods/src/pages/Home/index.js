import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Input, Title } from './styles';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonSolid, Header } from '../../components';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    resetNagivateToComanda = () => {
        const { navigation } = this.props;
        navigation.navigate('Comanda');
    };

    resetNagivateToConfiguracao = () => {
        const { navigation } = this.props;
        navigation.navigate('Configuracao');
    };

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
                    rightComponent={
                        <Button
                            icon={<Icon name="cog" size={22} color="#FFF" />}
                            type="clear"
                            onPress={() => this.resetNagivateToConfiguracao()}
                        />
                    }
                />
                <Container>
                    <Title>COMANDA/MESA</Title>
                    <Input
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={3}
                    />
                    <ButtonSolid
                        color={color.azul3}
                        title="OK"
                        onPress={this.resetNagivateToComanda}
                    />
                </Container>
            </>
        );
    }
}

export default Home;
