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
                    fontSize: 10,
                    width: '100%',
                    borderRadius: 5
                }}
                containerStyle={{
                    marginBottom: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 5
                }}
                icon={icon}
                onPress={onPress}
                title={title}
            />
        );
    }
}
