import {Button} from "antd";
import useWebsocket from "@/hooks/useWebsocket";
import {useEffect} from "react";

export default function NoticeIndex() {
	const {onMsg, sendMsg, disconnect} = useWebsocket();
	onMsg((data: any) => {
		console.log(data);
	});
	// setInterval(() => {
	// 	sendMsg({msg: "22222222222"});
	// }, 1000);
	useEffect(() => {
		return () => {
			disconnect();
		};
	});
	return (
		<div className={"notice"}>
			<Button onClick={() => disconnect()}>断开</Button>
			<Button onClick={() => sendMsg({msg: "22222222222"})}>发送信息</Button>
		</div>
	);
}
