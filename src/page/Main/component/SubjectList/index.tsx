import React, {forwardRef, useImperativeHandle, useState} from "react";

const SubjectList = forwardRef(function SubjectList(props, ref) {
	const [subjectList, handleSetSubjectList] = useState([]);
	useImperativeHandle(ref, () => {
		return {
			handleSetSubjectList,
			a: 1
		};
	}, []);
	return (
		<div className={"subject-list"}>
			{subjectList.map((subjectItem: any, index: number) => {
				return (
					<div className={"subject-item"} key={index}>
						<img src={"/logo192.png"} />
						<div className={"item-title"}>{subjectItem.title}</div>
						<div className={"item-title"}>{subjectItem.count}</div>
					</div>
				);
			})}
		</div>
	);
});
export default SubjectList;
