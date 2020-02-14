import React from 'react';
import { Input } from './styles';

export default class InputSolid extends React.Component {
    render() {
        const { placeholder, onSubmitEditing } = this.props;

        return (
            <Input
                placeholder={placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="send"
                onSubmitEditing={onSubmitEditing}
            />
        );
    }
}
