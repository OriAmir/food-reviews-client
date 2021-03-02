import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import PropTypes from "prop-types";
import "./input-debounce.scss";

const InputDebounce = ({
  placeholder,
  className,
  onChange,
  type,
  defaultValue,
}) => {
  const [val, setVal] = useState(defaultValue || "");
  const debounced = useDebouncedCallback(async (value) => {
    onChange(Number(value)-1);
  }, 500);

  return (
    <input
      className={`input-debounce ${className}`}
      type={type || "text"}
      value={val}
      placeholder={placeholder}
      onChange={(e) => {
        setVal(e.target.value);
        debounced.callback(e.target.value);
      }}
    />
  );
};

InputDebounce.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputDebounce;
