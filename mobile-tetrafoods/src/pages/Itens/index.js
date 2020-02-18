import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import api from '../../services/api';
import { Container, Title } from './styles';
import { ListItem, SearchBar, Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonSolid, Categorias, Header } from '../../components';

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

class Itens extends Component {
    state = {
        grupos: []
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.value}
            subtitleStyle={{ color: color.azul2 }}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.name[0]
            }}
            bottomDivider
            onPress={this.resetNagivateToDetalhes}
            chevron
        />
    );

    async componentDidMount() {
        try {
            this.getGrupos();
        } catch (e) {
            console.log({ error: e });
        }
    }

    getGrupos = async () => {
        const response = await api.get('grupos');
        this.setState({ grupos: response.data });
    };

    resetNagivateToComanda = () => {
        const { navigation } = this.props;
        navigation.navigate('Comanda');
    };

    resetNagivateToDetalhes = () => {
        const { navigation } = this.props;
        navigation.navigate('Detalhes');
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
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >
                            nº 96
                        </Text>
                    }
                />
                <Container>
                    <SearchBar
                        placeholder="Pesquisar"
                        lightTheme
                        containerStyle={{
                            backgroundColor: 'transparent'
                        }}
                    />
                    <Title>Bebidas</Title>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />
                    <ButtonSolid
                        onPress={this.resetNagivateToComanda}
                        color={color.azul3}
                        title="Fechar Pedido"
                    />
                    <Categorias />
                </Container>
            </>
        );
    }
}

export default Itens;
