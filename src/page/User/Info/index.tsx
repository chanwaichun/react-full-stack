import style from "./index.module.scss";
import { Button, Form, Input, Upload } from "antd";
import { rules } from "@/page/User/Login/component/RegisterForm/formConfig";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { upload } from "@/api/user/index";
import { type } from "@testing-library/user-event/dist/type";

export default function Info() {
	const [form] = Form.useForm();
	const { info } = useSelector((state: any) => state.user);
	const [fileList, setFileList] = useState([]);

	function beforeUpload(file: any) {
		console.log(file);
	}

	async function customRequest(obj: any) {
		console.log(obj);
		const formData = new FormData();
		formData.append("file", obj.file);
		await upload(formData, { "content-type": "multipart/form-data" });
		// setFileList(obj.file);
	}

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
				<Form.Item label="上传头像" name="avatar">
					<Upload
						action={""}
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						fileList={fileList}
						beforeUpload={beforeUpload}
						customRequest={customRequest}
					>
						<Button>上传</Button>
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
