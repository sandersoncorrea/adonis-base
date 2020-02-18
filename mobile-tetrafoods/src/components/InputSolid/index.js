import React from 'react';
import { Input } from './styles';

export default class InputSolid extends React.Component {
    render() {
        const { placeholder, onSubmitEditing, icon } = this.props;

        return (
            <Input
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
