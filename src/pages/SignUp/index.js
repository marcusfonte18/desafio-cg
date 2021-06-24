import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import AuthLayout from '../_layout/auth';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import api from '../../services/api';


const schema = Yup.object().shape({
    title: Yup.string().required('O title é obrigatório'),
    body: Yup.string().required('O body é obrigatório'),
    userId: Yup.number().min(1, 'Mínimo 1 dígitos')

});

export default function SignUp() {

    async function handleSubmit(data) {

        try {
            await api.post("https://jsonplaceholder.typicode.com/posts", {
                title: data.title,
                body: data.body,
                userId: data.userId
            });

        } catch {
            toast("Falha ao cadastrar usuário")
        };
        toast('Usuário Cadastrado')
        console.log(data)
    }

    return (
        <>
            <Header />
            <AuthLayout>
                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Title" />
                    <Input name="body" placeholder="Body" />
                    <Input name="userId" placeholder="User Id" />
                    <button type="submit">Salvar</button>
                </Form>
            </AuthLayout>
        </>
    );

}
