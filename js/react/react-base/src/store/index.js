import { createStore } from 'redux';

const initialState = {
    botaoClicado: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'BOTAO_CLICADO':
            console.log('Estou ouvindo BOTAO_CLICADO');
            return state;

        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
