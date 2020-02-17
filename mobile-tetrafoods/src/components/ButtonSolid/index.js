import React from 'react';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';

export default class ButtonSolid extends React.Component {
    render() {
        const { title, onPress, icon } = this.props;

        return (
            <Button
                buttonStyle={{
                    backgroundColor: color.azul3,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color.azul4,
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
