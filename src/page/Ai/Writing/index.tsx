import style from "./index.module.scss";
import {useEffect} from "react";
import {chatMessage} from "@/api/thridParty";
import useGetApiData from "@/hooks/useGetApiData";

export default function AiWriting() {
	async function handleGetData() {
		const res = await chatMessage((data: string) => {
			console.log(data.split("data:"));
		});
	}

	useEffect(() => {
		// request();
		handleGetData().then(res => {
			console.log(res);
		});

		return () => {};
	}, []);

	return <div className={style.aiWriting}>222222</div>;
}
