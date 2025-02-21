import style from "./index.module.scss";
import useGetApiData from "@/hooks/useGetApiData";
import {getUserList} from "@/api/user";
import {useEffect, useMemo} from "react";
import CommonTable from "@/component/CommonTable";
import {filterEnum, setTablePagination} from "@/util";
import {dataStatus} from "@/util/serviceDict";

export default function SystemUser() {
	const {data, request, loading, pagination, paginationChange} = useGetApiData(getUserList, {
		pageNum: 1,
		pageSize: 10
	});
	const tableColumn = [
		{
			title: "id",
			dataIndex: "userId",
			key: "userId"
		},
		{
			title: "用户姓名",
			dataIndex: "userName",
			key: "userName"
		},
		{
			title: "手机号码",
			dataIndex: "phone",
			key: "phone"
		},
		{
			title: "状态",
			dataIndex: "dataStatus",
			key: "dataStatus",
			render: (value: any, record: any, index: any) => {
				return filterEnum(value, dataStatus);
			}
		}
	];
	useEffect(() => {
		request();
		return () => {};
	}, []);

	async function handleOnChange(pagination: any, filters: any) {
		console.log(pagination, filters);
		await paginationChange(pagination);
	}

	return useMemo(
		() => (
			<div className={style.systemUser}>
				<CommonTable
					onChange={handleOnChange}
					loading={loading}
					pagination={setTablePagination(pagination)}
					columns={tableColumn}
					dataSource={data}
				></CommonTable>
			</div>
		),
		[data]
	);
}
