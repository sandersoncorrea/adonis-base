import { all } from 'redux-saga/effects';

import comanda from './comanda/sagas';

export default function* rootSaga() {
    return yield all([comanda]);
}
