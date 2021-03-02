import PropTypes from "prop-types";

const TotalResults = ({ loading, page, totalItems }) => {
  return (
    <tr>
      <td colSpan="10000">
        {loading ? (
          <span>Loading</span>
        ) : (
          <span className="total-results">
            Showing {page.length} reviews from total of {totalItems} reviews
          </span>
        )}
      </td>
    </tr>
  );
};

TotalResults.propTypes = {
  loading: PropTypes.bool,
  page: PropTypes.array,
};

export default TotalResults;
