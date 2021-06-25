import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AuthLayout from '../_layout/auth/';


const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')

});

export default function SignIn() {
    const history = useHistory()
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        if (signed) {
            history.push("/dashboard")
        }
    }, [signed]);


    function handleSubmit(data) {
        try {
            axios.get(`${process.env.REACT_APP_API_AUTH}`).then(response => {
                response.data.users.map(user => {
                    if (data.email === user.email || data.password === user.password) {
                        setSigned(true);
                    }
                });
            });
        } catch(err) {
            console.log("Falha ao logar")
        };

    }
    return (
        <AuthLayout>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha" />

                <button type="submit">Acessar</button>
            </Form>
        </ AuthLayout>
    );

}
