import React from 'react';

import { Paragrafo, Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
    return (
        <Container>
            <Title isRed={false}>
                Login
                <small>A</small>
            </Title>
            <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Paragrafo>
            <a href=''>Link</a>
        </Container>
    );
}
