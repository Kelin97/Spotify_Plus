import React from 'react';
import Button from 'react-bootstrap/Button';

function Login() {

    return(
        <div>
            <Button href="http://localhost:8888/login">Login to spodify</Button>
            <Button href="http://localhost:8888/refresh_token">Get refresh token</Button>
            <h1>Here is the song data:</h1>

        </div>
    )
}

export default Login
