import React, { Component } from 'react';
import { Text, FlatList, View, Button, Alert } from 'react-native';
import {
    Container,
    Title,
    Buttons,
    ListViewSubtitle,
    ListViewTitle,
    ListViewSubtitleFirst,
    Badges
} from './styles';
import { ListItem, Button as BtnElements, Badge } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    ButtonSolid,
    ButtonOutline,
    ButtonClear,
    ButtonMenos,
    ButtonMais,
    ButtonX,
    ButtonDetalhes,
    Header
} from '../../components';
import Modal from 'react-native-modal';
import ModalDetalhes from '../ModalDetalhes';
import ModalConfirmar from '../ModalConfirmar';

const list = [
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99',
        quantidade: 2,
        detalhes: ['C/ limão']
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99',
        quantidade: 5,
        detalhes: ['Gelado', 'C/ limão']
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99',
        quantidade: 2,
        detalhes: ['S/ salada']
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99',
        quantidade: 5,
        detalhes: []
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99',
        quantidade: 2,
        detalhes: []
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99',
        quantidade: 5,
        detalhes: []
    },
    {
        name: 'Cerveja Skol 350ml',
        value: 'R$ 19,98',
        desc: '2 x R$ 9,99',
        quantidade: 2,
        detalhes: []
    },
    {
        name: 'Cerveja Skol 500ml',
        value: 'R$ 74,95',
        desc: '5 x 14,99',
        quantidade: 5,
        detalhes: []
    }
];

class Detalhes extends Component {
    state = {
        grupos: [],
        isModalVisible: false,
        isModalConfirmarVisible: false,
        count: 2
    };

    keyExtractor = (item, index) => index.toString();

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    toggleModalConfirmar = () => {
        this.setState({
            isModalConfirmarVisible: !this.state.isModalConfirmarVisible
        });
    };

    setCount(value) {
        this.setState({
            count: this.state.count + value
        });
    }

    renderItem = ({ item }) => (
        <ListItem
            title={
                <ListViewTitle>
                    <Text style={{ fontSize: 20, marginBottom: 5 }}>
                        {item.name}
                    </Text>
                    <ButtonX />
                </ListViewTitle>
            }
            subtitle={
                <View>
                    <ListViewSubtitle>
                        <ListViewSubtitleFirst>
                            <Text
                                style={{ color: color.azul3, marginRight: 4 }}
                            >
                                {item.value}
                            </Text>
                            <ButtonMenos onPress={() => this.setCount(-1)} />
                            <Text
                                style={{
                                    color: color.azul3,
                                    marginRight: 4,
                                    marginLeft: 4
                                }}
                            >
                                {this.state.count}
                            </Text>
                            <ButtonMais onPress={() => this.setCount(1)} />
                        </ListViewSubtitleFirst>
                        <ButtonDetalhes onPress={this.toggleModal} />
                    </ListViewSubtitle>
                    <Badges>
                        {item.detalhes.map(d => {
                            return (
                                <Badge
                                    badgeStyle={style.badge}
                                    status="primary"
                                    value={d}
                                />
                            );
                        })}
                    </Badges>
                </View>
            }
            subtitleStyle={{ color: color.azul2 }}
            bottomDivider
        />
    );

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
                        <BtnElements
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
                            nº 98
                        </Text>
                    }
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
                    <ButtonClear
                        onPress={this.toggleModalConfirmar}
                        title="Abandonar Pedido"
                    />
                </Container>
                <Modal isVisible={this.state.isModalVisible}>
                    <ModalDetalhes onPress={this.toggleModal} />
                </Modal>
                <Modal isVisible={this.state.isModalConfirmarVisible}>
                    <ModalConfirmar
                        onPressSim={this.toggleModalConfirmar}
                        onPressNao={this.toggleModalConfirmar}
                    />
                </Modal>
            </>
        );
    }
}

const style = {
    badge: {
        borderColor: color.azul3,
        backgroundColor: color.azul3,
        margin: 2
    }
};

export default Detalhes;
