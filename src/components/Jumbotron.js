import "./jumbotron.scss";

const Jumbotron = ({ img, state }) => {
  return (
    <div className="container">
      <img src={img} alt="whatever"></img>
      <h2>Welcome to {state} </h2>
    </div>
  );
};
export default Jumbotron;
