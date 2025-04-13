import style from "./index.module.scss";
import {useEffect, useState} from "react";
import {getZitieByLevel} from "@/api/thridParty";

export default function AiWriting() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	async function handleGetData() {
		try {
			setLoading(true);
			setError(null);

			await getZitieByLevel((data: string) => {
				setData(prev => prev + data);
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
