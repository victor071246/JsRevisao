import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...response.data }));
        console.log('Payload recebido na saga:', payload);

        toast.success('Você fez login');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        history.push(payload.prevPath);
    } catch (e) {
        toast.error('Usuário ou senha inválidos.');

        yield put(actions.loginFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
    const { id, nome, email, password } = payload;

    try {
        if (id) {
            yield call(axios.put, '/users', {
                email,
                nome,
                password: password || undefined,
            });
            toast.success('Conta alterada com sucesso');
            yield put(actions.registerUpdatedSuccess({ nome, email, password }));
        } else {
            yield call(axios.post, '/users', {
                email,
                nome,
                password,
            });
            toast.success('Conta criada com sucesso!');
            yield put(actions.registerCreated_Success({ nome, email, password }));
            history.push('/login');
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('Você precisa fazer login novamente');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map(error => toast.error(error));
        } else {
            toast.error('Erro desconhecido');
        }

        return yield put(actions.registerFailure());
    }
    return 1;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
