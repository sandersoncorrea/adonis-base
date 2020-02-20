import React from 'react';
import { Button } from 'react-native-elements';
import color from '../../styles/palletecolor';
import PropTypes from 'prop-types';

export default class ButtonText extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        icon: PropTypes.element
    };
    render() {
        const { title, onPress, icon } = this.props;

        return (
            <Button
                type="clear"
                titleStyle={{
                    color: color.preto2,
                    fontWeight: 'normal',
                    fontSize: 10,
                    width: '100%'
                }}
                containerStyle={{
                    margin: 0
                }}
                icon={icon}
                onPress={onPress}
                title={title}
            />
        );
    }
}
