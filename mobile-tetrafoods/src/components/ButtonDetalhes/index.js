import React from 'react';
import { Button } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import color from '../../styles/palletecolor';

export default class ButtonDetalhes extends React.Component {
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
                    borderColor: color.preto3,
                    padding: 4,
                    margin: 1
                }}
                icon={
                    <FontAwesome
                        name="angle-double-right"
                        size={12}
                        color={color.preto3}
                    />
                }
                onPress={onPress}
            />
        );
    }
}
