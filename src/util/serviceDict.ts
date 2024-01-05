// * 系统全局字典
interface DictType {
	label: string;
	value: any;
}

/**
 * @description：用户性别
 */
export const dataStatus: Array<DictType> = [
	{ label: "有效", value: "1" },
	{ label: "无效", value: "0" }
];
