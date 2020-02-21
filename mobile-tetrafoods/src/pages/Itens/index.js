import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import {
    Container,
    Title,
    ContainerCategoria,
    TabsContainer,
    TabItem,
    TabText
} from './styles';
import { FontAwesome } from 'react-native-vector-icons';
import { ListItem, SearchBar, Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonSolid, Header } from '../../components';
import { Formatter } from '../../utils/str';

class Itens extends Component {
    state = {
        grupos: [],
        produtos: [],
        grupoAtual: null
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.nome}
            subtitle={Formatter('M', item.custo)}
            subtitleStyle={{ color: color.azul2 }}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.nome[0]
            }}
            bottomDivider
            onPress={() => this.handleAddProduct(item)}
            chevron
        />
    );

    handleAddProduct = product => {
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_TO_CART',
            product
        });
        this.resetNagivateToDetalhes();
    };

    async componentDidMount() {
        try {
            this.getGrupos();
        } catch (e) {
            console.log({ error: e });
        }
    }

    getGrupos = async () => {
        const response = await api.get('grupos');
        this.setState({
            ...this.state,
            grupos: response.data,
            grupoAtual: response.data[0]
        });
        this.getProdutos(response.data[0].codigo);
    };

    getProdutos = async grupoId => {
        const response = await api.get(`estoques/grupo/${grupoId}`);
        this.setState({ ...this.state, produtos: response.data });
    };

    setGrupo = grupo => {
        this.setState({
            ...this.state,
            grupoAtual: this.state.grupos.filter(
                g => g.codigo == grupo.codigo
            )[0]
        });
        this.getProdutos(grupo.codigo);
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
                            margin: 0,
                            padding: 0,
                            borderRadius: 5
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#E5E5E5'
                        }}
                    />
                    <Title>
                        {this.state.grupoAtual && this.state.grupoAtual.nome}
                    </Title>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.produtos}
                        renderItem={this.renderItem}
                    />
                    <ButtonSolid
                        onPress={this.resetNagivateToComanda}
                        color={color.azul3}
                        title="Fechar Pedido"
                    />
                    <ContainerCategoria>
                        <TabsContainer>
                            {this.state.grupos.map(dt => {
                                return (
                                    <TouchableOpacity
                                        key={dt.codigo}
                                        onPress={() => this.setGrupo(dt)}
                                    >
                                        <TabItem>
                                            <FontAwesome
                                                name="beer"
                                                size={50}
                                                color={color.azul3}
                                            />
                                            <TabText>{dt.nome}</TabText>
                                        </TabItem>
                                    </TouchableOpacity>
                                );
                            })}
                        </TabsContainer>
                    </ContainerCategoria>
                </Container>
            </>
        );
    }
}

export default connect()(Itens);
