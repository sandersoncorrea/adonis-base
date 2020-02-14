import React from 'react';
import { Button } from 'react-native-elements';

export default class ButtonText extends React.Component {
    render() {
        const { color, title, onPress, icon } = this.props;

        return (
            <Button
                type="clear"
                titleStyle={{
                    color: color.preto2,
                    fontWeight: 'normal',
                    fontSize: 10
                }}
                icon={icon}
                onPress={onPress}
                title={title}
            />
        );
    }
}
