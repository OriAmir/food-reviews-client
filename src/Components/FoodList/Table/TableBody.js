import { useReactTable } from "Contexts/TableContext";
import { AiFillEye } from "react-icons/ai";
import TotalResults from "./TotalResults";
import { useDispatch } from "react-redux";
import { setCurrentSelectedReview } from "store/FoodList/foodList.actions";

const TableBody = () => {
  const tableInstance = useReactTable();
  const dispatch = useDispatch();
  const {
    getTableBodyProps,
    page,
    prepareRow,
    loading,
    totalItems,
  } = tableInstance;

  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()}>
                  {cell.column.id === "view" ? (
                    <AiFillEye
                      className="view-icon"
                      onClick={() => {
                        dispatch(setCurrentSelectedReview(cell.row.values.Id));
                      }}
                    />
                  ) : (
                    cell.render("Cell")
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
      <TotalResults loading={loading} page={page} totalItems={totalItems} />
    </tbody>
  );
};

export default TableBody;
