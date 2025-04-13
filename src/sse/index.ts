import store from "@/store";

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

export async function connectSSE(url: string, body: any, onMessage: (data: string) => void, onError?: (err: any) => void) {
	const controller = new AbortController();

	try {
		const {token} = store.getState().user;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "text/event-stream",
				Authorization: token ? "Bearer " + token : ""
			},
			body: JSON.stringify(body),
			signal: controller.signal
		});
		if (response.body) {
			const reader = response.body.getReader();
			const decoder = new TextDecoder();

			while (true) {
				const {done, value} = await reader.read();

				const chunk = decoder.decode(value);
				const data = formatDataFromSSE(chunk);
				onMessage(data);
				if (done) break;
			}
		}
		// @ts-ignore
	} catch (err) {
		onError?.(err);
	}
}
