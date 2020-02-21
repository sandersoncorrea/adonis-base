import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Comanda from './pages/Comanda';
import Itens from './pages/Itens';
import Detalhes from './pages/Detalhes';
import Configuracao from './pages/Configuracao';

const StackConfig = {
    initialRouteName: 'Itens',
    headerTitleAlign: 'center',
    headerMode: 'none'
};

const StackNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Início'
            }
        },
        Comanda,
        Itens: {
            screen: Itens
        },
        Detalhes,
        Configuracao
    },
    StackConfig
);

const Routes = createAppContainer(StackNavigator);

export default Routes;
