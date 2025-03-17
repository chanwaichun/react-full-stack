export function setRem() {
	// 设计稿宽度 (750px 或 375px)
	const baseWidth: number = 375; // 如果是 375px 设计稿，则改为 375
	// 当前设备宽度
	const clientWidth: number = document.documentElement.clientWidth || window.innerWidth;
	const remSize: number = (clientWidth / baseWidth) * 16; // 100px = 1rem
	if (clientWidth > 375) {
		document.documentElement.style.fontSize = "";
	} else {
		document.documentElement.style.fontSize = remSize + "px";
	}
}

setRem();
// 监听窗口变化，动态调整 `rem`
window.addEventListener("resize", setRem);
window.addEventListener("pageshow", function (e) {
	if (e.persisted) {
		setRem(); // 页面缓存恢复时重新计算
	}
});
