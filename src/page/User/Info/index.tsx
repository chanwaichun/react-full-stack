import style from "./index.module.scss";
import { Button, Form, Input, Upload } from "antd";
import { rules } from "@/page/User/Login/component/RegisterForm/formConfig";
import React from "react";
import { useSelector } from "react-redux";

export default function Info() {
	const [form] = Form.useForm();
	const { info } = useSelector((state: any) => state.user);

	function onFinish() {}

	function onFinishFailed() {}

	return (
		<div className={style.userInfo}>
			<Form
				labelAlign={"left"}
				labelCol={{ span: 8 }}
				className={style["registerForm"]}
				name="basic"
				form={form}
				initialValues={info}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item label="用户名" name="userName" rules={rules.userName}>
					<Upload
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						showUploadList={false}
						action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
					>
						uploadButton
						{/*{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}*/}
					</Upload>
				</Form.Item>
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
		</div>
	);
}
