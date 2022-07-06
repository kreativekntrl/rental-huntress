import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <div>
        <form className="form">
          <h2>Sign Up</h2>
          <p>
            Already have an account? <Link to="/signIn">Sign In!</Link>
          </p>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary submit">
            Sign Up
          </button>
        </form>
      </div>
    );
}

export default SignUp;