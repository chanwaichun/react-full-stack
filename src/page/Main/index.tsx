import React, {JSX, useEffect, useRef} from "react";
import style from "./index.module.scss";
import SubjectList from "@/page/Main/component/SubjectList";
import {SubjectListRef} from "@/page/Main/component/SubjectList/type";

// 首页展示需要考试的科目
function Main(): JSX.Element {
	const ref: React.MutableRefObject<null | SubjectListRef> = useRef(null);
	useEffect(() => {
		// mock
		if (ref.current) {
			ref.current.handleSetSubjectList([
				{
					title: "subject A",
					count: "subject count"
				},
				{
					title: "subject B",
					count: "subject count2"
				}
			]);
		}
	}, [ref]);
	return (
		<div className={style.main}>
			<SubjectList ref={ref}></SubjectList>
		</div>
	);
}

export default Main;
