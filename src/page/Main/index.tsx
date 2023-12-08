import React, {JSX, ReactNode, useState} from 'react';
import {login} from "@/api/user";

function Login(): JSX.Element {
    const [state, setState] = useState(0)
    const [form, setForm] = useState({user: '', password: ''})

    async function handleLogin() {
        try {
            const res = await login(form);
            console.log(res)
            window.localStorage.setItem('token', res.data)
        } catch (e) {
            console.log(e)
        }


    }

    function handleChangeForm(e: any, type: string) {
        console.log(form)
        const currentForm = {...form, [type]: e.target.value}
        console.log(currentForm)
        setForm(currentForm)
    }

    return (
        <div className={'login'}>
            11111111
        </div>
    )
}

export default Login
