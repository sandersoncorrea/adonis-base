import React from 'react';
import { Button } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import color from '../../styles/palletecolor';

export default class ButtonX extends React.Component {
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
                    borderColor: color.laranja,
                    padding: 3,
                    margin: 1
                }}
                icon={
                    <FontAwesome name="times" size={10} color={color.laranja} />
                }
                onPress={onPress}
            />
        );
    }
}
