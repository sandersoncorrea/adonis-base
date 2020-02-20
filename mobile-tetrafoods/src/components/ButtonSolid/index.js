import React from 'react';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import PropTypes from 'prop-types';

export default class ButtonSolid extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        icon: PropTypes.element
    };
    render() {
        const { title, onPress, icon } = this.props;

        return (
            <Button
                buttonStyle={{
                    backgroundColor: color.azul3,
                    borderColor: color.azul4,
                    borderRadius: 5,
                    borderWidth: 2,
                    width: '100%'
                }}
                containerStyle={{
                    marginBottom: 5,
                    marginRight: 3,
                    marginLeft: 3,
                    marginTop: 5
                }}
                onPress={onPress}
                title={title}
                icon={icon}
            />
        );
    }
}
