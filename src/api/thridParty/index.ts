import http from "@/http";

const prefix = "http://localhost:3000/api/thirdParty";
const prefix2 = "http://localhost:3000/api/zitie";
// export const chatMessage = (params: any) => {
// 	return http.post(, params, {headers: {noLoading: true}});
// };

export function formatDataFromSSE(chunk: string) {
	return chunk
		.split("data:")
		.filter((item: any) => item)
		.map((item: string) => {
			try {
				const jsonData = JSON.parse(item);
				return jsonData.choices[0]?.delta?.content;
			} catch (err) {
				return "";
			}
		})
		.join("");
}

export async function chatMessage(params: any, callback: Function) {
	const response = await fetch(prefix + "/chatMessage", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(params)
	});
	if (response.body) {
		// 处理流式数据
		const reader = response.body.getReader();
		const decoder = new TextDecoder();

		while (true) {
			const {done, value} = await reader.read();
			const data = formatDataFromSSE(decoder.decode(value));
			callback(data);
			if (done) break;
		}
	}
}

export async function getZitieByLevel(callback: Function) {
	const response = await fetch(prefix2 + "/getZitieByLevel", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({})
	});
	if (response.body) {
		// 处理流式数据
		const reader = response.body.getReader();
		const decoder = new TextDecoder();

		while (true) {
			const {done, value} = await reader.read();
			const data = formatDataFromSSE(decoder.decode(value));
			callback(data);
			if (done) break;
		}
	}
}
