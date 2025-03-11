import React, {useMemo} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "@/page/User/Login";
import AiWriting from "@/page/Ai/Writing";
import Layout from "@/component/Layout";
import Authorized from "@/component/Authorized";
import {businessRouter} from "@/route";
import Home from "@/page/Home";

function RenderRoute(routeList: any): any {
	return routeList.map((item: any) => {
		// 如果有子路由
		if (item.hasOwnProperty("children")) {
			return RenderRoute(item.children);
		} else {
			// 没有子路由
			return <Route path={item.path} key={item.name} element={item.element()} />;
		}
	});
}

function App(): JSX.Element {
	// @ts-ignore
	return useMemo(
		() => (
			<Routes>
				<Route path={"/"} element={<Home />}></Route>
				{/*登录拦截*/}

				<Route path={"/ai"}>
					<Route path={"writing"} element={<AiWriting />} />
				</Route>
				<Route path={"/user"}>
					<Route path={"login"} element={<Login />} />
				</Route>

				<Route
					element={
						<Authorized>
							<Layout />
						</Authorized>
					}
				>
					{RenderRoute(businessRouter)}
				</Route>
			</Routes>
		),
		[]
	);
}

export default App;
