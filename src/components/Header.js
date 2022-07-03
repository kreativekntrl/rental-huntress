import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button
          className="btn menu-btn"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ padding: "0", float: "left", backgroundColor: "white" }}
        >
          <i className="bi bi-list" style={{ fontSize: "30px" }}></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            Action
          </button>
          <button className="dropdown-item" type="button">
            Another action
          </button>
          <button className="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>
      <h1>Rental Huntress</h1>
      <Link to="/signIn">Sign In</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};
export default Header;
