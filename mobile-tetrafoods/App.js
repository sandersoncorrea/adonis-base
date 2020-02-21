import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';

import { Provider } from 'react-redux';
import Routes from './src/routes';
import { Container } from './src/styles/global';
import store from './src/store';

export default function App() {
    return (
        <Provider store={store}>
            <Container>
                <StatusBar
                    translucent={false}
                    backgroundColor="#00707F"
                    barStyle="light-content"
                />
                <Routes />
            </Container>
        </Provider>
    );
}
