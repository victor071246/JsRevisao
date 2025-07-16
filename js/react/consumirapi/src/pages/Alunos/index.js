import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import axios from '../../services/axios';
import * as colors from '../../config/colors';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsLoading(false);
        }

        getData();
    }, []);

    const handleDeleteAsk = e => {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;
        e.currentTarget.remove();
        exclamation.setAttribute('display', 'block');
    };

    const handleDelete = async (e, id, index) => {
        e.persist();
        try {
            setIsLoading(true);
            await axios.delete(`/alunos/${id}`);
            e.currentTarget.parentElement.remove();
            const novosAlunos = [...alunos];
            novosAlunos.splice(index, 1);
            setAlunos(novosAlunos);
            setIsLoading(false);
        } catch (e) {
            const status = get(e, 'response.status', 0);

            if (status === 401) {
                toast.error('Você precisa fazer login');
                return;
            } else {
                toast.error('Ocorreu um erro ao excluir o aluno');
            }
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <Loading isLoading={isLoading}></Loading>
            <h1>Alunos</h1>

            <NovoAluno to='/aluno/'>Novo aluno</NovoAluno>

            <AlunoContainer>
                {alunos.map((aluno, index) => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'Fotos[0].url', false) ? (
                                <img src={aluno.Fotos[0].url} />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit color={colors.primaryColor} size={16}></FaEdit>
                        </Link>
                        <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose color={colors.primaryColor} size={16}></FaWindowClose>
                        </Link>

                        <FaExclamation
                            size={16}
                            display='none'
                            cursor='pointer'
                            onClick={e => handleDelete(e, aluno.id, index)}
                        ></FaExclamation>
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}
