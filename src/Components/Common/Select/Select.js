import ReactSelect from "react-select";
import PropTypes from "prop-types";

const Select = ({
  options,
  className,
  placeholder,
  onChange,
  menuPlacement,
  isDisabled,
}) => {
  return (
    <ReactSelect
      options={options}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      menuPlacement={menuPlacement}
      isDisabled={isDisabled}
    />
  );
};

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  menuPlacement: PropTypes.string,
};

export default Select;
