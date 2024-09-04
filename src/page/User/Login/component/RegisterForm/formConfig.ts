const validatePassword = (form: any) => ({
	validator: (_: any, value: any) => {
		if (!value || form.getFieldValue("password") === form.getFieldValue("passwordSure")) {
			return Promise.resolve();
		}
		return Promise.reject(new Error("两次密码不正确"));
	}
});

export const rules = {
	userName: [{required: true, message: "请输入用户名"}],
	password: [{required: true, message: "请输入用户密码"}],
	passwordSure: [{required: true, message: "请输入用户密码"}, validatePassword],
	phone: [{required: true, message: "请输入手机号码"}]
};
