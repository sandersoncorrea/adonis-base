import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addComandaSuccess } from './actions';

export function* getComanda(payload) {
    try {
        const response = yield call(api.get, `/davpre/${payload.codigo}`);
        if (response.data == null || response.data.length == 0) {
            yield put(
                addComandaSuccess({
                    codigo: payload.codigo,
                    emissao: new Date().toISOString()
                })
            );
        } else {
            yield put(addComandaSuccess(response.data));
        }
    } catch (error) {
        console.tron.log({ error });
    }
}

export default all([takeLatest('ADD_COMANDA_REQUEST', getComanda)]);
