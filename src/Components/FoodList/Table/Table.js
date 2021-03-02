import { useEffect } from "react";
import { useReactTable } from "Contexts/TableContext";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination/Pagination";
import "./table.scss";

const Table = () => {
  const tableInstance = useReactTable();
  const {
    fetchData,
    state: { pageIndex, pageSize, filters },
    getTableProps,
    headerGroups,
  } = tableInstance;
  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    fetchData && fetchData({ pageIndex, pageSize, filters });
  }, [fetchData, pageIndex, pageSize, filters]);

  return (
    <div className="container">
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <TableHeader headerGroups={headerGroups} />
          <TableBody />
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
