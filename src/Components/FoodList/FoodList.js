import Table from "./Table/Table";
import { tableColumns } from "./food-list.constants";
import { useMemo, useCallback } from "react";
import "./food-list.scss";
import TableProvider from "Contexts/TableContext";
import TableFilters from "./Table/TableFilters/TableFilters";
import { useDispatch, useSelector } from "react-redux";
import {
  getTableDataFiltered,
  getTableData,
} from "store/FoodList/foodList.actions";
import ReviewInformation from "./ReviewInformation/Review-Information";
import Error from "Components/Common/Error/Error";
import { getFinalFilters } from "Components/FoodList/food-list.utils";

const FoodList = () => {
  const columns = useMemo(() => tableColumns, []);
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foodList);
  const fetchData = useCallback(
    async ({ pageSize, pageIndex, filters }) => {
      const finalFilters = getFinalFilters(filters);
      if (finalFilters && finalFilters.length > 0) {
        dispatch(
          getTableDataFiltered({
            pageSize,
            pageIndex,
            filterOptions: finalFilters,
          })
        );
      } else {
        dispatch(getTableData({ pageSize, pageIndex }));
      }
    },
    [dispatch]
  );

  return (
    <div className="food-list-wrapper">
      <TableProvider
        data={foodList?.tableData?.reviews || []}
        columns={columns}
        fetchData={fetchData}
        loading={foodList?.loading}
        totalPages={foodList?.tableData?.totalPages}
        totalItems={foodList?.tableData?.totalItems}
      >
        <TableFilters />
        <Table />
      </TableProvider>
      {foodList?.error && <Error />}
      <ReviewInformation />
    </div>
  );
};

export default FoodList;
