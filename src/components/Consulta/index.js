import React, { useState, useEffect, useCallback } from 'react';
import { TableContainer, Container, Wrraper } from './styles';
import api from '../../services/api';
import Header from '../Header';

export default function Consulta() {
    const [comments, setComments] = useState(['']);

    async function handleDelete(id) {
        console.log(id);
        await api.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    const commentList = useCallback(async () => {
        const response = await api.get('https://jsonplaceholder.typicode.com/posts')
        setComments(response.data);
    }, []);

    useEffect(() => {
        commentList();
    }, [comments]);

    return (
        <>
            <Header />
            <Wrraper>
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
                                    <tr>
                                        <td className="Id">{comment.id}</td>
                                        <td className="Title">{comment.title}</td>
                                        <td className={'Body'}>{comment.body}</td>
                                        <td className="UserId">{comment.userId}</td>
                                        <td className="Action">
                                            <buttonc>Editar</buttonc>
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