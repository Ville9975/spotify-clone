import React from 'react';
import './Login.css';
import Music from './img/music.jfif';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        <img src={Music} alt=""/>
        <a href={loginUrl}>Login</a>
    </div>
  )
}

export default Login;