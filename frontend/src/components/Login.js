import React from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css'


function Login() {

    
    return(
        <div>
            <html>
            <div className = 'login-page'>
                <div className = 'header'>
                    <div className = 'login-app-title'>
                        <h1 style={{fontWeight: 600}}> Spotify +</h1>
                    </div>
                </div>
                <div className = 'space'></div>
                <div className = 'body'>
                    <div className = 'app-info'>
                        <h1>Why this app?</h1>
                        <p>I made this app to give people access to the extra features that Spodify's web API provides. 
                            Some of the tools include a detailed look at your currently playing song,
                            your top artist/tracks and more</p>
                    </div>
                    
                </div>
                <div className = 'login-button'>
                        <Button href="http://localhost:8888/login">Login to Spodify</Button>
                </div>
            </div>
            </html>
        </div>
    )
}

export default Login
