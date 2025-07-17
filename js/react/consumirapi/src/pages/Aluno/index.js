import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
    const dispatch = useDispatch();

    const id = get(match, 'params.id', '');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!id) return;

        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                const Foto = get(data, 'Fotos[0].url', '');

                setFoto(Foto);

                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);

                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                const status = get(e, 'response.status', 0);
                const errors = get(e, 'response.data.errors', []);

                if (status === 400) errors.map(error => toast.error(error));
                history.push('/');
            }
        }

        getData();
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 && nome.length >= 255) {
            toast.error('Nome precisa ter entre 3 e 255 caracteres');
            formErrors = true;
        }
        if (sobrenome.length < 3 && sobrenome.length >= 255) {
            toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
            formErrors = true;
        }
        if (!isEmail(email)) {
            toast.error('E-mail inválido');
            formErrors = true;
        }

        if (!isInt(String(idade))) {
            toast.error('Idade inválida');
            formErrors = true;
        }

        if (!isFloat(String(peso))) {
            toast.error('Peso inválido');
            formErrors = true;
        }

        if (!isFloat(String(altura))) {
            toast.error('Altura inváida');
            formErrors = true;
        }

        if (formErrors) return;

        try {
            setIsLoading(true);
            if (id) {
                //Editando
                await axios.put(`/alunos/${id}`, { nome, sobrenome, email, idade, peso, altura });
                toast.success('Aluno(a) editado(a) com sucesso!');
            } else {
                //Criando
                const { data } = await axios.post(`/alunos/`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura,
                });
                toast.success('Aluno(a) criado(a) com sucesso!');
                history.push(`/alunos/${data.id}/edit`);
            }
            setIsLoading(false);
        } catch (e) {
            const status = get(e, 'response.status', 0);
            const data = get(e, 'resposne.data', {});
            const errors = get(data, 'errors', []);

            if (errors.length > 0) {
                errors.map(error => toast.error(error));
            } else {
                toast.error('Erro desconhecido');
            }

            if (status === 401) dispatch(actions.loginFailure());
        }
    };

    return (
        <Container>
            <Loading isLoading={isLoading}></Loading>
            <h1>{id ? 'Editar aluno ' : 'Novo aluno'}</h1>
            {id && (
                <ProfilePicture>
                    {foto ? (
                        <img src={foto} alt={nome}></img>
                    ) : (
                        <FaUserCircle size={180}></FaUserCircle>
                    )}
                    <Link to={`/fotos/${id}`}>
                        <FaEdit size={24}></FaEdit>
                    </Link>
                </ProfilePicture>
            )}
            <Form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder='Nome'
                ></input>{' '}
                <input
                    type='text'
                    value={sobrenome}
                    onChange={e => setSobrenome(e.target.value)}
                    placeholder='Sobrenome'
                ></input>{' '}
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                ></input>{' '}
                <input
                    type='number'
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                    placeholder='Idade'
                ></input>{' '}
                <input
                    type='text'
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    placeholder='Peso'
                ></input>{' '}
                <input
                    type='text'
                    value={altura}
                    onChange={e => setAltura(e.target.value)}
                    placeholder='Altura'
                ></input>
                <button type='submit'>Enviar</button>
            </Form>
        </Container>
    );
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
};
