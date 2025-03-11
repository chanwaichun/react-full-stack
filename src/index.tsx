import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {currentPersistStore} from "@/store";
import {PersistGate} from "redux-persist/integration/react";

(function () {
	function setRem() {
		// 设计稿宽度 (750px 或 375px)
		const baseWidth = 375; // 如果是 375px 设计稿，则改为 375

		// 当前设备宽度
		const clientWidth = document.documentElement.clientWidth || window.innerWidth;

		// 计算 `html` 需要设置的 `font-size`
		const remSize = (clientWidth / baseWidth) * 16; // 100px = 1rem

		// 设置 `html` 根元素的 `font-size`
		document.documentElement.style.fontSize = remSize + "px";
	}

	// 监听窗口变化，动态调整 `rem`
	window.addEventListener("resize", setRem);
	window.addEventListener("pageshow", function (e) {
		if (e.persisted) {
			setRem(); // 页面缓存恢复时重新计算
		}
	});

	// 初始执行一次
	setRem();
})();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={currentPersistStore}>
			<HashRouter>
				<App />
			</HashRouter>
		</PersistGate>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
