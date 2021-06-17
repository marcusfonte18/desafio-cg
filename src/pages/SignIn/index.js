import React from 'react';

export default function SignIn() {
    return (
        <>
            <form>
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha" />

                <button type="submit">Acessar</button>
            </form>
        </>
    );

}