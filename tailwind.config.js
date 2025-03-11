/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}" // 确保 Tailwind 能正确扫描到你的文件
	],
	theme: {
		extend: {
			fontFamily: {
				noto: ["Noto Sans", "sans-serif"]
			},
			colors: {
				ink: "#222222" // 你可以自定义颜色
			}
		}
	},
	plugins: []
};
