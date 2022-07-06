import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <form className="form">
        <h2>Sign In</h2>
        <p>
          Need to create and account? <Link to="/signUp">Sign Up!</Link>
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
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default SignIn;
