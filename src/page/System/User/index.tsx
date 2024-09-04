import style from "./index.module.scss";
import {Table} from "antd";
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
    useEffect(() => {
        handleRequest()
        return () => {
        };
    }, []);

    async function handleRequest() {
        await request()
    }

    async function handleOnChange(pagination: any, filters: any) {
        console.log(pagination, filters);
        await paginationChange(pagination);
    }

    return (
        <div className={style.systemUser}>
            <CommonTable
                onChange={handleOnChange}
                loading={loading}
                pagination={setTablePagination(pagination)}
                columns={[
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
                        render: (value, record, index) => {
                            return filterEnum(value, dataStatus);
                        }
                    }
                ]}
                dataSource={data}
            ></CommonTable>
        </div>
    );
}
