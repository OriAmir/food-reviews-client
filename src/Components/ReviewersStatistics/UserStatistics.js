import PropTypes from "prop-types";

const UserStatistics = ({ user }) => (
  <div className="user-stats">
    <div className="user-data">{user.userId}</div>
    <div className="user-data">{user.totalReviews}</div>
  </div>
);

UserStatistics.propTypes = {
  user: PropTypes.object,
};

export default UserStatistics;
