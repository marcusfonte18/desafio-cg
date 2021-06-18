import styled from "styled-components";


export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
`; import React from 'react';

export default function Dashboard() {
    return <h1>dashboard</h1>;
}

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav { 
        display: flex;
        align-items:  center;
    }

    span {
        color: #7159c1;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
        cursor: pointer;
        padding-left: 10px;
    }

   
`;

export const Profile = styled.div`

`;
