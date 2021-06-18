import React from 'react';
import { useHistory } from "react-router-dom";


import { Container, Content } from './styles';

export default function Header() {
    const history = useHistory();

    return (
        <Container>
            <Content>
                <nav>
                    <span onClick={() => history.push("/dashboard")}>CGE-RJ</span>
                </nav>

                <aside>
                    <span onClick={() => history.push("/register")}>Cadastro</span>
                    <span onClick={() => history.push("/request")}>Consulta</span>
                    <span onClick={() => history.push("/")}>Sair</span>
                </aside>
            </Content>
        </Container >
    );
}