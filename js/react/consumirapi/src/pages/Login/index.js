import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('O email deve ser válido');
        }
        if (password.length < 3 || password.length > 255) {
            formErrors = true;
            toast.error('A senha deve ter enter 6 e 50 caracteres');
        }

        if (formErrors) return;

        console.log('teste');
    };

    return (
        <Container>
            <h1>Login {email}</h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Seu email'
                ></input>{' '}
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Sua senha'
                ></input>
                <button type='submit'>Acessar</button>
            </Form>
        </Container>
    );
}
