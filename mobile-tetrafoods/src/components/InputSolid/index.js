import React from 'react';
import { Input } from './styles';
import PropTypes from 'prop-types';

export default class InputSolid extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onSubmitEditing: PropTypes.func,
        icon: PropTypes.element,
        secureTextEntry: PropTypes.bool
    };

    static defaultProps = {
        secureTextEntry: false
    };

    render() {
        const {
            placeholder,
            onSubmitEditing,
            icon,
            secureTextEntry
        } = this.props;

        return (
            <Input
                keyboardType="email-address"
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="send"
                onSubmitEditing={onSubmitEditing}
                style={{ textAlign: 'left', fontSize: 15, height: 40 }}
            />
        );
    }
}
