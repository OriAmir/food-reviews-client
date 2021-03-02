import { useHistory } from "react-router-dom";
import "./navbar.scss";
import NavItem from "./NavItem";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="nav-wrapper">
      <span className="nav-title" onClick={() => history.push("/foodList")}>
        Food Reviews
      </span>
      <NavItem to="/foodList" title="Food List" />
      <NavItem to="/foodStatistics" title="Food Statistics" /> 
      <NavItem to="/reviewersStatistics" title="Reviewers Statistics" />
    </div>
  );
};

export default Navbar;
