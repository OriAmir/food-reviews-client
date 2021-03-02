import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const NavItem = ({ title, to }) => {
  const location = useLocation();
  return (
    <div
      className={`nav-item ${location?.pathname?.includes(to) ? "active" : ""}`}
    >
      <Link className="nav-label" to={to}>
        {title}
      </Link>
    </div>
  );
};

NavItem.prototype = {
  title: PropTypes.string,
  to: PropTypes.string,
};

export default NavItem;
