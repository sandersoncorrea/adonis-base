import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import api from '../../services/api';
import { Container, Title, Buttons } from './styles';
import { Header, ListItem, SearchBar } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonSolid, Categorias, ButtonOutline } from '../../components';

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

class Detalhes extends Component {
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

    resetNagivateToObservacao = () => {
        const { navigation } = this.props;
        navigation.navigate('Observacao');
    };

    resetNagivateToItens = () => {
        const { navigation } = this.props;
        navigation.navigate('Itens');
    };

    render() {
        return (
            <>
                <Header
                    leftComponent={
                        <Icon name="chevron-left" size={20} color="#FFF" />
                    }
                    rightComponent={
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >
                            nº 99
                        </Text>
                    }
                    containerStyle={{
                        backgroundColor: color.azul3
                    }}
                />
                <Container>
                    <Title>Detalhes</Title>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />
                    <Buttons>
                        <ButtonSolid
                            onPress={this.resetNagivateToItens}
                            color={color.azul3}
                            title="Concluir"
                        />
                        <ButtonOutline
                            onPress={this.resetNagivateToItens}
                            color={color.azul3}
                            title="Adicionar mais"
                        />
                    </Buttons>
                </Container>
            </>
        );
    }
}

export default Detalhes;
