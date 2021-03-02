import { numPerPageOptions } from "Components/FoodList/food-list.constants";
import Select from "react-select";
import PropTypes from "prop-types";

const NumberPerPageSelect = ({ pageSize, setPageSize }) => (
  <Select
    className="number-per-page-select"
    options={numPerPageOptions}
    onChange={({ value }) => setPageSize(value)}
    value={pageSize}
    menuPlacement="top"
    placeholder={numPerPageOptions[0].label}
  />
);

NumberPerPageSelect.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  total: PropTypes.number,
};

export default NumberPerPageSelect;
