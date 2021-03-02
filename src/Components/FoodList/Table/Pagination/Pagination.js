import { useReactTable } from "Contexts/TableContext";
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateNext,
  MdNavigateBefore,
} from "react-icons/md";
import NavigateButton from "./NavigateButton";
import InputNavigate from "./InputNavigate";
import NumberPerPageSelect from "./NumberPerPageSelect";
import "./pagination.scss";

const Pagination = () => {
  const tableInstance = useReactTable();
  const {
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = tableInstance;

  return (
    <div className="pagination">
      <div className="page-num">
        Page {pageIndex + 1} of {pageCount === 0 ? 1 : pageCount}
      </div>
      <div className="navigate-row">
        <NavigateButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          icon={<MdFirstPage />}
        />
        <NavigateButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          icon={<MdNavigateBefore />}
        />
        <NavigateButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
          icon={<MdNavigateNext />}
        />
        <NavigateButton
          onClick={() => {
            gotoPage(pageCount - 1);
          }}
          disabled={!canNextPage}
          icon={<MdLastPage />}
        />
        <InputNavigate
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          disabled={!canNextPage && !canPreviousPage}
        />
        <NumberPerPageSelect pageCount={pageCount} setPageSize={setPageSize} />
      </div>
    </div>
  );
};

export default Pagination;
