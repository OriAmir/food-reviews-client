import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import PropTypes from "prop-types";

const ProductIdFilter = ({ onChange }) => {
  const [val, setVal] = useState("");

  const debounced = useDebouncedCallback(async (value) => {
    onChange(value);
  }, 500);

  return (
    <input
      className="product-id-input-filter"
      value={val}
      placeholder="Filter by product Id"
      onChange={(e) => {
        setVal(e.target.value);
        debounced.callback(e.target.value);
      }}
    />
  );
};

ProductIdFilter.propTypes = {
  onChange: PropTypes.func,
};

export default ProductIdFilter;
