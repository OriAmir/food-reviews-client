import "./error.scss";
import { MdError } from "react-icons/md";
import PropTypes from "prop-types";

const Error = ({
  text = "Something was wrong , please try different search",
}) => (
  <div className="error">
    <MdError className="error-icn" />
    {text}
  </div>
);

Error.propTypes = {
  text: PropTypes.string,
};

export default Error;
