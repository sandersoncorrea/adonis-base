import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { Text, FlatList, View } from 'react-native';
import {
    Container,
    Title,
    Buttons,
    ListViewSubtitle,
    ListViewTitle,
    ListViewSubtitleFirst,
    Badges,
    TotalView,
    Total,
    Value
} from './styles';
import { ListItem, Button, Badge } from 'react-native-elements';
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

import { Formatter } from '../../utils/str';

class Detalhes extends Component {
    state = {
        isModalVisible: false,
        isModalConfirmarVisible: false
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

    renderItem = ({ item }) => {
        const { removeFromCart, updateQuantidade } = this.props;

        return (
            <ListItem
                title={
                    <ListViewTitle>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}>
                            {item.nome}
                        </Text>
                        <ButtonX onPress={() => removeFromCart(item.codigo)} />
                    </ListViewTitle>
                }
                subtitle={
                    <View>
                        <ListViewSubtitle>
                            <ListViewSubtitleFirst>
                                <Text
                                    style={{
                                        color: color.azul3,
                                        marginRight: 4
                                    }}
                                >
                                    {item.subtotal}
                                </Text>
                                <ButtonMenos
                                    onPress={() =>
                                        updateQuantidade(
                                            item.codigo,
                                            item.quantidade - 1
                                        )
                                    }
                                />
                                <Text
                                    style={{
                                        color: color.azul3,
                                        marginRight: 4,
                                        marginLeft: 4
                                    }}
                                >
                                    {item.quantidade}
                                </Text>
                                <ButtonMais
                                    onPress={() =>
                                        updateQuantidade(
                                            item.codigo,
                                            item.quantidade + 1
                                        )
                                    }
                                />
                            </ListViewSubtitleFirst>
                            <ButtonDetalhes onPress={this.toggleModal} />
                        </ListViewSubtitle>
                        <Badges>
                            {item.detalhes.map(d => {
                                return (
                                    <Badge
                                        key={d}
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
        const { cart, total } = this.props;

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
                            nº 98
                        </Text>
                    }
                />
                <Container>
                    <Title>Detalhes</Title>
                    <TotalView>
                        <Text style={{ color: '#aeaeae' }}>subtotal</Text>
                        <Total>
                            <Value>{total}</Value>
                        </Total>
                    </TotalView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={cart}
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
const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: Formatter(
            'M',
            parseFloat(product.custo) * parseInt(product.quantidade)
        )
    })),
    total: Formatter(
        'M',
        state.cart.reduce((total, product) => {
            return total + product.custo * product.quantidade;
        }, 0)
    )
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detalhes);
