import {Button, Checkbox, Form, Input, message} from "antd";
import React, {useState} from "react";
import {login} from "@/api/user";
import {useNavigate} from "react-router";
import './index.module.scss'
import {setToken} from '@/reducer/user'
import {useDispatch} from "react-redux";
import style from './index.module.scss'


export default function LoginForm(props:any) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [form] = useState({user: '', password: '', remember: false})
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        try {
            const res = await login(values);
            dispatch(setToken(res.data))
            //
            navigate('/main')
        } catch (e) {
            console.log(e)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function pathToRegister() {
        props.changeFormType()
    }

    return (
        <Form
            labelAlign={'left'}
            labelCol={{span: 4}}
            className={style['registerForm']}
            name="basic"
            initialValues={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="userName"
                required={false}
            >
                <Input autoComplete={'none'}/>
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                required={false}
            >
                <Input.Password autoComplete={'none'}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                style={{textAlign: 'left'}}
            >
                <Checkbox>记住密码</Checkbox>
                <a onClick={pathToRegister}>还没有账号？立马注册</a>
            </Form.Item>

            <Form.Item>
                <Button className={style['registerForm-button']} type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
}
