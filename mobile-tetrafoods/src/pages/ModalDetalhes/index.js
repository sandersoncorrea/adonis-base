import React, { Component } from 'react';
import { Text, FlatList, TextInput } from 'react-native';
import { Container, Title, Subtitle } from './styles';
import { CheckBox } from 'react-native-elements';
import { ButtonSolid } from '../../components';

const list = [
    {
        name: 'Gelada'
    },
    {
        name: 'C/ limão'
    }
];

export default class ModalDetalhes extends Component {
    renderItem = ({ item }) => (
        <CheckBox
            title={item.name}
            titleProps={{ color: '#fff' }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={false}
            containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0
            }}
            textStyle={{ color: '#FFF' }}
            checkedColor={{ color: '#FFF' }}
        />
    );

    keyExtractor = (item, index) => index.toString();

    render() {
        const { onPress } = this.props;
        return (
            <Container>
                <Title>Cerveja Skol 350ml</Title>
                <Subtitle>R$ 6,00</Subtitle>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                />
                <Text style={{ color: '#FFF', fontSize: 16, marginBottom: 10 }}>
                    Observações
                </Text>
                <TextInput
                    multiline
                    numberOfLines={10}
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 10
                    }}
                />
                <ButtonSolid title="OK" onPress={onPress} />
            </Container>
        );
    }
}
