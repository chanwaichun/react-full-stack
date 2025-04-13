// This is the entry point for the Dialog component.

import React, {useRef, useState} from "react";
import "../styles/components.scss";
import {addMessage} from "@/api/zitie";
import {useSelector} from "react-redux";
import {chatMessage} from "@/api/thridParty";

type roleType = "user" | "assistant" | "system";

interface Message {
	// 会话id
	// 内容
	content: string;
	// 是否是用户
	role: roleType;
	// 时间
	timestamp?: Date;
}

const Dialog: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState(false);
	const msgRef = useRef(messages);
	const [inputValue, setInputValue] = useState("");
	const user = useSelector((state: any) => state.user);
	const {userId, deviceId} = user.info;

	function setMessageByRole(content: string, role: roleType) {
		const newMessage: Message = {
			content,
			role
		};
		msgRef.current = [...msgRef.current, newMessage];
		setMessages(msgRef.current);
		return newMessage;
	}

	function findLatestSystem() {
		const currentList = [...msgRef.current];
		const lastIndex = currentList.length - 1;
		const findItem: any = currentList.find((item, index) => {
			return index === lastIndex;
		});
		return {findItem, currentList};
	}

	function deleteLatestSystem() {
		const currentList = [...msgRef.current];
		const lastIndex = currentList.length - 1;
		currentList.splice(lastIndex, 1);
		setMessages(currentList);
	}

	const handleSendMessage = async () => {
		if (!inputValue.trim()) return;
		const userMsg = setMessageByRole(inputValue, "user");
		try {
			setInputValue("");
			const allMsgRes = await addMessage({userId, deviceId, ...userMsg});
			setMessageByRole("", "assistant");
			console.log(msgRef.current);
			setLoading(true);
			await chatMessage({messages: allMsgRes.data}, (data: string) => {
				const {findItem, currentList} = findLatestSystem();
				findItem.content += data;
				setMessages(currentList);
			});
			const {findItem} = findLatestSystem();
			if (!findItem.content) {
				deleteLatestSystem();
			} else {
				await addMessage({userId, deviceId, ...findItem});
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);

			// setTimeout(() => {
			// 	const aiMessage: Message = {
			// 		content: "这是一个AI助手的回复示例。",
			// 		role: "system",
			// 		timestamp: new Date()
			// 	};
			// 	setMessages(prev => [...prev, aiMessage]);
			// }, 1000);
		}

		// 模拟AI回复
	};

	return (
		<div className="page-container">
			<div className="dialog-header">
				<div className="header-left">
					<button className="back-button">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<h2 className="page-title">AI助手对话</h2>
				</div>
			</div>

			<div className="dialog-content">
				<div className="messages-container">
					{messages.map((message, index) => (
						<div key={index} className={`message ${message.role === "user" ? "user-message" : "ai-message"}`}>
							<div className="message-content">{message.content}</div>
							{/*<div className="message-time">*/}
							{/*	{message.timestamp.toLocaleTimeString([], {*/}
							{/*		hour: "2-digit",*/}
							{/*		minute: "2-digit"*/}
							{/*	})}*/}
							{/*</div>*/}
						</div>
					))}
				</div>

				<div className="input-container">
					<textarea
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						placeholder="输入您的问题..."
						onKeyPress={async e => {
							if (e.key === "Enter" && !e.shiftKey && !loading) {
								e.preventDefault();
								await handleSendMessage();
							}
						}}
					/>
					<button className="send-button" onClick={handleSendMessage} disabled={!inputValue.trim() || loading}>
						<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
