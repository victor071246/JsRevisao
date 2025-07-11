import React from 'react';
import { useDispatch } from 'react-redux';

import { Paragrafo, Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }

    return (
        <Container>
            <Title isRed={false}>
                Login
                <small>A</small>
            </Title>
            <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Paragrafo>
            <button type='button' onClick={handleClick}>
                Enviar
            </button>
        </Container>
    );
}
