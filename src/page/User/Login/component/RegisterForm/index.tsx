import {Button, Checkbox, Form, Input, message} from "antd";
import React, {useState} from "react";
import {register} from "@/api/user";
import {useNavigate} from "react-router";
import "./index.module.scss";
import {setToken} from "@/reducer/user";
import {useDispatch} from "react-redux";
import style from "./index.module.scss";
import {rules} from "./formConfig";

export default function LoginForm(props: any) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const initialValues = {
		password: "",
		passwordSure: "",
		userName: "",
		phone: ""
	};
	const onFinish = async (values: any) => {
		console.log("Success:", values);
		const {phone, password, userName} = values;
		try {
			await register({phone, password, userName});
			message.success("注册成功");
			props.changeFormType("login");
			// console.log(res)
			// navigate('/main')
		} catch (e) {
			console.log(e);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	function pathToLogin() {
		props.changeFormType("login");
	}
	return (
		<>
			<span className={style.backBtn} onClick={() => pathToLogin()}>
				{/*<ArrowLeftOutlined className={style.icon} />*/}
				<span>返回</span>
			</span>
			<Form
				labelAlign={"left"}
				labelCol={{span: 8}}
				className={style["registerForm"]}
				name="basic"
				form={form}
				initialValues={initialValues}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item label="用户名" name="userName" rules={rules.userName}>
					<Input autoComplete={"none"} />
				</Form.Item>
				<Form.Item label="手机号码" name="phone" rules={rules.phone}>
					<Input autoComplete={"none"} />
				</Form.Item>
				<Form.Item label="密码" name="password" rules={rules.password}>
					<Input autoComplete={"none"} />
				</Form.Item>
				<Form.Item label="确认密码" name="passwordSure" rules={rules.passwordSure}>
					<Input autoComplete={"none"} />
				</Form.Item>
				<Form.Item>
					<Button className={style["registerForm-button"]} type="primary" htmlType="submit">
						注册
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
