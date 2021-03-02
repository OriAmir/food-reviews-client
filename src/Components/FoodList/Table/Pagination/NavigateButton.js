import PropTypes from "prop-types";

const NavigateButton = ({ onClick, disabled, icon }) => {
  return (
    <button
      className={`navigate-btn ${disabled ? "disabled" : ""}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

NavigateButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

export default NavigateButton;
