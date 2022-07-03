import { Link } from "react-router-dom";
import "./Header.scss";
import { useEffect, useState } from 'react';

const Header = () => {
<<<<<<< HEAD
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('/about')
      .then(data => {
        return data.json()
      })
      .then((res) => {
        if (mounted) {
          setList(res)
        }
      })
    return () => mounted = false;
  }, [])
=======
>>>>>>> 43a3abaf59bbb9749f64c713370f9f81264614d9

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
<<<<<<< HEAD
      <button onClick={() => alert('clickedP')}>Sign Up</button>
=======
      <Link to="/signIn">Sign In</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
>>>>>>> 43a3abaf59bbb9749f64c713370f9f81264614d9
    </div>
  );
};
export default Header;
