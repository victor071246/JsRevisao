import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error('O nome deve ter enter 3 e 255 caracteres');
        }
        if (!isEmail(email)) {
            formErrors = true;
            toast.error('O email deve ser válido');
        }
        if (password.length < 3 || password.length > 255) {
            formErrors = true;
            toast.error('A senha deve ter enter 6 e 50 caracteres');
        }

        if (formErrors) return;

        try {
            const response = await axios.post('/users/', {
                nome,
                password,
                email,
            });
            toast.success('Você foi registrado com sucesso');
            history.push('/');

            console.log(response.data);
        } catch (e) {
            const errors = get(e, 'response.data.errors', []);
            errors.map(error => toast.error(error));
        }
    }

    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='nome'>
                    Nome:
                    <input
                        type='text'
                        value={nome}
                        placeholder='Seu nome'
                        onChange={e => setNome(e.target.value)}
                    ></input>
                </label>{' '}
                <label htmlFor='email'>
                    E-mail:
                    <input
                        type='text'
                        value={email}
                        placeholder='Seu email'
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </label>{' '}
                <label htmlFor='password'>
                    Senha:
                    <input
                        type='password'
                        value={password}
                        placeholder='Sua senha'
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </label>
                <button type='submit'>Criar minha conta</button>
            </Form>
        </Container>
    );
}
