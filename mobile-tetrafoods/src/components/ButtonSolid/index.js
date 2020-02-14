import React from 'react';
import { Button } from 'react-native-elements';

export default class ButtonSolid extends React.Component {
    render() {
        const { color, title, onPress, icon } = this.props;

        return (
            <Button
                buttonStyle={{
                    backgroundColor: color,
                    borderRadius: 5,
                    marginBottom: 5,
                    marginTop: 5
                }}
                onPress={onPress}
                title={title}
                icon={icon}
            />
        );
    }
}
