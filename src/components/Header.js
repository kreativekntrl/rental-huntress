import { Link } from "react-router-dom";
import "./Header.scss";
import { useEffect, useState } from 'react';

const Header = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('/about')
      .then(data => {
        return data.json()
      })
      .then((res) => {
        // console.log('res', res)
        if (mounted) {
          setList(res)
        }
      })
    return () => mounted = false;
  }, [])

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
