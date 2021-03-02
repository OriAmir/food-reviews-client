import { createContext, useContext } from "react";
import { useTable, usePagination, useFilters } from "react-table";
const ReactTableContext = createContext({});

export default function TableProvider({
  children,
  columns,
  data,
  totalPages,
  totalItems,
  loading,
  fetchData,
}) {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, filters: [] }, // Pass our hoisted table state
      manualPagination: true,
      pageCount: totalPages,
      manualFilters: true,
    },
    useFilters,
    usePagination
  );
  return (
    <ReactTableContext.Provider
      value={{ ...tableInstance, loading, fetchData, totalItems }}
    >
      {children}
    </ReactTableContext.Provider>
  );
}

export const useReactTable = () => {
  const context = useContext(ReactTableContext);
  if (context === undefined) {
    throw new Error("useReactTable must be used within a ReactTableProvider");
  }
  return context;
};
