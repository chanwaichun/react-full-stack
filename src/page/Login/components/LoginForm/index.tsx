import {Button, Checkbox, Form, Input,message } from "antd";
import React, {useState} from "react";
import {login} from "@/api/user";
import {useNavigate} from "react-router";
import './index.scss'

export default function LoginForm() {
    const navigate = useNavigate()
    const [form] = useState({user: '', password: '',remember:false})
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        try {
            const res = await login(values);
            console.log(res)
            window.localStorage.setItem('token', res.data)
            navigate('/main')
        } catch (e) {
            console.log(e)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            labelAlign={'left'}
            labelCol={{span:4}}
            className={'component_loginForm'}
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
                style={{textAlign:'left'}}
            >
                <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button className={'loginForm-button'} type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}
