import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Container, TotalView, Total, Value, Desc, Footer } from './styles';
import { ListItem, Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '../../components';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Formatter } from '../../utils/str';
import api from '../../services/api';

import { connect } from 'react-redux';

class Comanda extends Component {
    state = {
        itens: []
    };

    UNSAFE_componentWillMount() {
        this.getItens();
    }

    resetNagivateToItens = () => {
        const { navigation } = this.props;
        navigation.navigate('Itens');
    };

    resetNagivateToDetalhes = () => {
        const { navigation } = this.props;
        navigation.navigate('Detalhes');
    };

    keyExtractor = (item, index) => index.toString();

    getItens = async () => {
        const { comanda } = this.props;
        const response = await api.get(`/davpreitens/${comanda.codigo}`);
        this.setState({ ...this.state, itens: response.data });
    };

    renderItem = ({ item }) => (
        <ListItem
            title={item.estoque.nome}
            rightTitle={Formatter('M', parseFloat(item.quant * item.unitario))}
            rightSubtitle={`${item.quant} x ${Formatter(
                'M',
                parseFloat(item.unitario)
            )}`}
            bottomDivider
        />
    );

    render() {
        const { numero, entrada, total, comanda } = this.props;
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
                            {numero}
                        </Text>
                    }
                />
                <Container>
                    <TotalView>
                        <Text>total do pedido</Text>
                        <Total>
                            <Value>{total}</Value>
                            <Desc>{entrada}</Desc>
                        </Total>
                    </TotalView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.itens}
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
                            onPress={this.resetNagivateToDetalhes}
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

const mapStateToProps = state => ({
    comanda: state.comanda.comanda,
    numero: `nº ${state.comanda.comanda.codigo}`,
    entrada: `${formatRelative(
        parseISO(state.comanda.comanda.emissao),
        new Date(),
        { locale: ptBR }
    )}`,
    total: Formatter('M', parseFloat(state.comanda.comanda.total))
});

export default connect(mapStateToProps)(Comanda);
