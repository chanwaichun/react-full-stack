import {Table, TableProps} from "antd";
// @ts-ignore
import PropTypes from "prop-types";

export default function CommonTable(props: Partial<TableProps<any>>) {
	return <Table {...props}></Table>;
}

CommonTable.propTypes = {
	// api: PropTypes.func.isRequired,
	dataSource: PropTypes.array,
	columns: PropTypes.array
};
CommonTable.defaultProps = {
	dataSource: [],
	columns: []
};
