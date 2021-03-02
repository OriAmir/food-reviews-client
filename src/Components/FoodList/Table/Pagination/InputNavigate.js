import InputDebounce from "Components/Common/InputDebounce/InputDebounce";
import PropTypes from "prop-types";

const InputNavigate = ({ pageIndex, gotoPage }) => (
  <span className="input-navigate-wrapper">
    Go to page:
    <InputDebounce
      type="number"
      defaultValue={pageIndex + 1}
      onChange={(val) => gotoPage(val)}
    />
  </span>
);

InputNavigate.propTypes = {
  pageIndex: PropTypes.number,
  gotoPage: PropTypes.func,
};

export default InputNavigate;
