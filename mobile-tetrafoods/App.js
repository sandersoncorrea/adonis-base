import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import { Container } from './src/styles/global';

export default function App() {
    return (
        <Container>
            <StatusBar
                translucent={false}
                backgroundColor="#00707F"
                barStyle="light-content"
            />
            <Routes />
        </Container>
    );
}
