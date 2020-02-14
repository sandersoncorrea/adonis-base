import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Container, Input, Title } from './styles';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    resetNagivateToComanda = () => {
        const { navigation } = this.props;
        navigation.navigate('Comanda');
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
                    rightComponent={<Icon name="cog" size={22} color="#FFF" />}
                    containerStyle={{
                        backgroundColor: color.azul3
                    }}
                />
                <Container>
                    <Title>COMANDA/MESA</Title>
                    <Input
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={3}
                    />
                    <Button
                        containerStyle={{
                            marginTop: 20
                        }}
                        buttonStyle={{ backgroundColor: color.azul3 }}
                        title="OK"
                        titleStyle={{
                            textAlign: 'center',
                            backgroundColor: color.azul3
                        }}
                        onPress={this.resetNagivateToComanda}
                    />
                </Container>
            </>
        );
    }
}

export default Home;
