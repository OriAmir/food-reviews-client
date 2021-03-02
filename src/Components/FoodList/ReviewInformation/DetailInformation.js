import PropTypes from "prop-types";

const DetailInformation = ({ title, value }) => {
  return (
    <div className="detail-info">
      <span className="detail-title">{title}: </span>
      <span className="detail-value">{value}</span>
    </div>
  );
};

DetailInformation.propTypes = {
  title: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DetailInformation;
