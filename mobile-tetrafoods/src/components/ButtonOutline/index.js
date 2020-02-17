import React from 'react';
import { Button } from 'react-native-elements';

export default class ButtonText extends React.Component {
    render() {
        const { color, title, onPress, icon } = this.props;

        return (
            <Button
                type="outline"
                buttonStyle={{
                    backgroundColor: 'transparent',
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color,
                    width: '100%'
                }}
                containerStyle={{
                    marginBottom: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 5
                }}
                titleStyle={{ color }}
                onPress={onPress}
                title={title}
                icon={icon}
            />
        );
    }
}
