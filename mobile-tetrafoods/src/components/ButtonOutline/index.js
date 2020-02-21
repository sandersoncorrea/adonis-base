import React from 'react';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import PropTypes from 'prop-types';

export default class ButtonOutline extends React.Component {
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
                    backgroundColor: 'rgba(255, 255, 255)',
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color.azul3,
                    width: '100%'
                }}
                containerStyle={{
                    marginBottom: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 5
                }}
                onPress={onPress}
                titleStyle={{ color: color.preto2 }}
                title={title}
                icon={icon}
            />
        );
    }
}
