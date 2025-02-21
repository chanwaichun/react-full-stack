// @ts-ignore
import {Manager} from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

type UseWebsocket = {
	sendMsg: Function;
	onMsg: Function;
	disconnect: Function;
};
export default function (): UseWebsocket {
	const manager = new Manager("ws://localhost:80");
	const socket = manager.socket("/notice");

	function sendMsg<T>(data: T, callback?: Function): void {
		socket.emit("message", data);
		callback && callback(data);
	}

	function onMsg(callback?: Function): void {
		socket.on("message", callback);
	}

	function disconnect() {
		socket.disconnect();
	}

	return {
		sendMsg,
		onMsg,
		disconnect
	};
}
