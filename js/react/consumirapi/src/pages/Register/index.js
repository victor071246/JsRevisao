import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Register() {
    const dispatch = useDispatch();
    const id = useSelector(state => state.auth.user.id);
    const nomeStored = useSelector(state => state.auth.user.nome);
    const emailStored = useSelector(state => state.auth.user.email);
    const isLoading = useSelector(state => state.auth.isLoading);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    React.useEffect(() => {
        if (!id) return;

        setNome(nomeStored);
        setEmail(emailStored);
    }, []);

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
        if (!id && (password.length < 3 || password.length > 255)) {
            formErrors = true;
            toast.error('A senha deve ter enter 6 e 50 caracteres');
        }

        if (formErrors) return;
        dispatch(actions.registerRequest({ nome, email, password, id }));
    }

    return (
        <Container isLoading={isLoading}>
            <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

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
                <button type='submit'>{id ? 'Salvar' : 'Criar minha conta'}</button>
            </Form>
        </Container>
    );
}
