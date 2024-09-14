// @ts-ignore
import {Manager} from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

export default function NoticeIndex() {
	const manager = new Manager("ws://localhost:80");
	const socket = manager.socket("/notice");
	setInterval(() => {
		socket.emit("message", {a: "b", c: []});
	}, 1000);

	return <div className={"notice"}></div>;
}
