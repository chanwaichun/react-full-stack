import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./util/rem";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {currentPersistStore} from "@/store";
import {PersistGate} from "redux-persist/integration/react";

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
