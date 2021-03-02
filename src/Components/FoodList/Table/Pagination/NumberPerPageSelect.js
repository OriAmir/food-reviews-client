import { numPerPageOptions } from "Components/FoodList/food-list.constants";
import PropTypes from "prop-types";
import Select from "Components/Common/Select/Select";

const NumberPerPageSelect = ({ pageCount, setPageSize }) => (
  <Select
    className="number-per-page-select"
    options={numPerPageOptions}
    onChange={({ value }) => setPageSize(value)}
    menuPlacement="top"
    placeholder={numPerPageOptions[0].label}
    isDisabled={pageCount < 10}
  />
);

NumberPerPageSelect.propTypes = {
  pageCount: PropTypes.number,
  setPageSize: PropTypes.func,
  total: PropTypes.number,
};

export default NumberPerPageSelect;
