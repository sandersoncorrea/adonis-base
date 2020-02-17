import React from 'react';
import { Button } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import color from '../../styles/palletecolor';

export default class ButtonMais extends React.Component {
    render() {
        const { onPress } = this.props;

        return (
            <Button
                type="outline"
                containerStyle={{
                    display: 'flex'
                }}
                buttonStyle={{
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: color.azul3,
                    padding: 3,
                    margin: 1
                }}
                icon={<FontAwesome name="plus" size={10} color={color.azul3} />}
                onPress={onPress}
            />
        );
    }
}
