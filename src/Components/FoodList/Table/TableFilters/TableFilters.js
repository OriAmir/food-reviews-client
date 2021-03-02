import ProductIdFilter from "./ProductIdFilter";
import { useReactTable } from "Contexts/TableContext";
import Select from "Components/Common/Select/Select";
import { scoreFilterOptions } from "Components/FoodList/food-list.constants";
import "./table-filters.scss";

const TableFilters = () => {
  const tableInstance = useReactTable();
  const { setFilter } = tableInstance;

  return (
    <div className="table-filters-wrapper">
      <Select
        options={scoreFilterOptions}
        placeholder="Filter by Score"
        className="score-filter"
        onChange={({ value }) => setFilter("score", value)}
      />
      <ProductIdFilter onChange={(val) => setFilter("productId", val)} />
    </div>
  );
};

export default TableFilters;
