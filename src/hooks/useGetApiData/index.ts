import {useCallback, useEffect, useMemo, useState} from "react";
import {COMMON_PAGINATION} from "@/util/constant";

export default function useGetApiData(api: any, params: any) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pagination, setPagination] = useState(COMMON_PAGINATION);
	const request = useCallback(async (currentParams?: any) => {
		setLoading(true);
		try {
			const {data} = await api(currentParams || params);
			if (data.hasOwnProperty("records")) {
				const {pageSize, pageNum, total, records} = data;
				setData(records);
				setPagination({...pagination, pageNum, pageSize, total});
			} else {
				setData(data);
			}
		} catch (e) {
			console.error(e);
			setLoading(false);
		}
		setLoading(false);
	}, []);
	const paginationChange = async (paginationParams: any) => {
		const {current, pageSize, total} = paginationParams;
		setPagination({...pagination, pageNum: current, pageSize, total});
		await request({pageNum: current, pageSize});
	};

	return {data, loading, request, pagination, paginationChange};
}
