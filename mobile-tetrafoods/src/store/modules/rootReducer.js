import { combineReducers } from 'redux';

import cart from './cart/reducer';
import comanda from './comanda/reducer';

export default combineReducers({
    cart,
    comanda
});
