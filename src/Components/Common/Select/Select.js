import ReactSelect from "react-select";
import PropTypes from "prop-types";

const Select = ({ options, className, placeholder, onChange }) => {
  return (
    <ReactSelect
      options={options}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
