import { COMMON_PAGINATION } from "@/util/constant";

export function filterEnum(
	callValue: any,
	enumData: any[] | undefined,
	fieldNames?: { label: string; value: string },
	type?: "tag"
): string {
	const value = fieldNames?.value ?? "value";
	const label = fieldNames?.label ?? "label";
	let filterData: { [key: string]: any } = {};
	if (Array.isArray(enumData)) filterData = enumData.find((item: any) => item[value] === callValue);
	if (type === "tag") return filterData?.tagType ? filterData.tagType : "";
	return filterData ? filterData[label] : "--";
}

export function setTablePagination(pagination: any) {
	if (!pagination) {
		return COMMON_PAGINATION;
	}
	return { ...pagination, current: pagination.pageNum };
}
