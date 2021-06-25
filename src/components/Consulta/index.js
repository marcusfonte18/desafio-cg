import React, { useState, useEffect, useCallback } from 'react';
import { TableContainer, Container, Wrraper } from './styles';
import api from '../../services/api';
import Header from '../Header';

export default function Consulta() {
    const [comments, setComments] = useState(['']);

    async function handleDelete(id) {
        console.log(id);
        await api.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`);
    }

    const commentList = useCallback(async () => {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/posts`)
        setComments(response.data);
    }, []);

    useEffect(() => {
        commentList();
    }, [comments]);

    return (
        <>
            <Header />
            <Wrraper >
                <Container>
                    <TableContainer>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>userID</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {comments.map(comment => (
                                    <tr >
                                        <td >{comment.id}</td>
                                        <td >{comment.title}</td>
                                        <td >{comment.body}</td>
                                        <td >{comment.userId}</td>
                                        <td>
                                            <button>Editar</button>
                                            <button onClick={() => handleDelete(comment.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TableContainer>
                </Container>
            </ Wrraper>
        </>
    );
}
