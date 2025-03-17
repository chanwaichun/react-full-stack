import React, {useMemo} from "react";
import "./App.css";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Login from "@/page/User/Login";
import AiWriting from "@/page/Ai/Writing";
import GradeSelection from "@/page/Ai/Zite/GradeSelection";
import PoemRecommendations from "@/page/Ai/Zite/PoemRecommendations";
import PrintPreview from "@/page/Ai/Zite/PrintPreview";
import VisitorAuth from "@/component/VisitorAuth";
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
				<Route
					element={
						<VisitorAuth>
                            <Outlet />
						</VisitorAuth>
					}
				>
                    <Route path={"/ai"}>
                        <Route path={"writing"} element={<AiWriting />} />
                        <Route path={"zite"}>
                            <Route index element={<Navigate to="gradeSelection" replace />} />
                            <Route path={"gradeSelection"} element={<GradeSelection />} />
                            <Route path={"poemRecommendations"} element={<PoemRecommendations />} />
                            <Route path={"printPreview"} element={<PrintPreview />} />
                        </Route>
                    </Route>
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
