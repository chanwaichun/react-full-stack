module.exports = {
	plugins: {
		"@tailwindcss/postcss": {},
		autoprefixer: {},
		"postcss-pxtorem": {
			rootValue: 16, // 设计稿 750px -> 37.5（可根据设计稿尺寸调整）
			unitPrecision: 5, // 保留5位小数
			propList: ["*"], // 需要转换的属性列表，* 代表所有属性都转换
			selectorBlackList: [], // 要忽略的选择器
			replace: true, // 直接替换 px 为 rem
			mediaQuery: false, // 允许在媒体查询中转换 px
			minPixelValue: 2 // 小于 2px 的不会被转换
		}
	}
};
