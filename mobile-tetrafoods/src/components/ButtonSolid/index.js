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
                    width: '100%',
                    paddingBottom: 10,
                    paddingTop: 9
                }}
                containerStyle={{
                    marginBottom: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 5
                }}
                onPress={onPress}
                title={title}
                icon={icon}
            />
        );
    }
}
