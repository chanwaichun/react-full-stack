import React, {JSX, ReactNode, useState} from 'react';
import {login} from "@/api/user";
import {useNavigate} from "react-router";
import style from './index.module.scss'
import './index.scss'
import LoginForm from './components/LoginForm'

function Login(): JSX.Element {
    const [state, setState] = useState(0)

    const navigate = useNavigate();

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };


    return (
        <div className="page_login">
            <div className="loginForm">
                <div className={'left'}>
                    <img src={require('@/static/login/login.png')} />
                </div>
                <div className={'right'}>
                    <LoginForm/>
                </div>

            </div>

        </div>
    )
}

export default Login
