import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Fotos({ match }) {
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');

    const [isLoading, setIsloading] = React.useState(false);
    const [foto, setFoto] = React.useState('');

    React.useEffect(() => {
        const getData = async () => {
            try {
                setIsloading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                setFoto(get(data, 'Fotos[0].url', ''));
                setIsloading(false);
            } catch (e) {
                setIsloading(true);
                toast.error('Erro ao obter a imagem');
                history.push('/');
                setIsloading(false);
            }
        };

        getData();
    }, [id]);

    const handleChange = async e => {
        const file = e.target.files[0];
        const fotoURL = URL.createObjectURL(file);

        setFoto(fotoURL);

        const formData = new FormData();
        formData.append('aluno_id', id);
        formData.append('foto', file);

        try {
            setIsloading(true);

            await axios.post('/fotos/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Foto enviada com sucesso!');

            setIsloading(false);
        } catch (e) {
            setIsloading(false);
            const { status } = get(e, 'response', '');
            toast.error('Erro ao enviar foto.');

            if (status === 401) dispatch(actions.loginFailure);
        }
    };

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <Title>Fotos</Title>

            <Form>
                <label htmlFor='foto'>
                    {foto ? <img src={foto}></img> : 'Selecionar'}
                    <input type='file' id='foto' onChange={handleChange}></input>
                </label>
            </Form>
        </Container>
    );
}

Fotos.propTypes = { match: PropTypes.shape().isRequired };
