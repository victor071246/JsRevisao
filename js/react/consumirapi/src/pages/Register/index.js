import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { isEmail } from 'validator';
import axios from '../../services/axios';

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

            console.log(response.data);
        } catch (e) {}
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
