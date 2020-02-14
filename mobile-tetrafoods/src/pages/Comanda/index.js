import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container, TotalView, Total, Value, Desc, Footer } from './styles';
import { Header, ListItem, Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonSolid from '../../components/ButtonSolid';

const list = [
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99'
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99'
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99'
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99'
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99'
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99'
    }
];

class Comanda extends Component {
    state = {
        grupos: []
    };

    resetNagivateToItens = () => {
        const { navigation } = this.props;
        navigation.navigate('Itens');
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            rightTitle={item.value}
            rightSubtitle={item.desc}
            // leftAvatar={{
            //     source: item.avatar_url && { uri: item.avatar_url },
            //     title: item.name[0]
            // }}
            bottomDivider
        />
    );

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
                        <Text style={{ color: '#FFF' }}>nº 99</Text>
                    }
                    containerStyle={{
                        backgroundColor: color.azul3
                    }}
                />
                <Container>
                    <TotalView>
                        <Text>total do pedido</Text>
                        <Total>
                            <Value>R$ 94,95</Value>
                            <Desc>Entrada: Hoje, 21:53</Desc>
                        </Total>
                    </TotalView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />
                    <Footer>
                        <Button
                            buttonStyle={{
                                backgroundColor: color.azul3,
                                borderRadius: 100,
                                padding: 10
                            }}
                            color={color.azul3}
                            icon={<Icon name="pencil" size={30} color="#FFF" />}
                        />
                        <Button
                            buttonStyle={{
                                backgroundColor: color.azul3,
                                borderRadius: 100,
                                padding: 10
                            }}
                            icon={<Icon name="plus" size={30} color="#FFF" />}
                            onPress={this.resetNagivateToItens}
                        />
                    </Footer>
                </Container>
            </>
        );
    }
}

export default Comanda;
