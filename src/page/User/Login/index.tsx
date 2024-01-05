import React, {JSX, useState} from 'react';
import {useNavigate} from "react-router";
import classNames from "classnames";
import './index.scss'
import LoginForm from './component/LoginForm'
import RegisterForm from './component/RegisterForm'

function Login(): JSX.Element {
    const [state, setState] = useState(0)

    const navigate = useNavigate();

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };
    type FormType = 'login' | 'register'

    const [formType, changeFormType] = useState('login')

    return (
        <div className="page_login">
            <div className="loginForm">
                <div className={'left'}>
                    <img src={require('@/static/login/login.png')}/>
                </div>
                <div className={classNames('right', formType)}>
                    {
                        formType === 'login' ?
                            <LoginForm changeFormType={(status: FormType) => changeFormType(status)}/> :
                            <RegisterForm changeFormType={(status: FormType) => changeFormType(status)}/>

                    }
                </div>

            </div>

        </div>
    )
}

export default Login
