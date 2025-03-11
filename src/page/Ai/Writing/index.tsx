import style from "./index.module.scss";
import {useEffect, useState} from "react";
import {chatMessage} from "@/api/thridParty";

export default function AiWriting() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	async function handleGetData() {
		try {
			setLoading(true);
			setError(null);

			await chatMessage((chunk: string) => {
				if (chunk.includes("data:")) {
					const messages = chunk
						.split("data:")
						.filter(item => item)
						.map(item => {
							try {
								const jsonData = JSON.parse(item);
								return jsonData.choices[0]?.delta?.content;
							} catch (err) {
								return "";
							}
						})
						.join("");
					setData(prev => prev + messages);
				}
			});
		} catch (err) {
			console.log(err);
			setError(err instanceof Error ? err.message : "请求失败");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			await handleGetData();
		};
		fetchData();
		return () => {
			setData("");
			setError(null);
		};
	}, []);

	return (
		<div className={style.aiWriting}>
			{loading && <div>加载中...</div>}
			{error && <div className="error">{error}</div>}
			{data}
		</div>
	);
}
