import laImg1 from "../images/laImg1.jpg";
import laImg2 from "../images/laImg2.jpg";
import laImg3 from "../images/laImg3.jpg";
import laImg4 from "../images/laImg4.jpg";

const LaList = () => {
  return (
    <div>
      <h2>Explore Rentals in Los Angeles, CA</h2>
      <div className="card-group">
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-laImg-top" src={laImg1} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">The Den</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              See Rental
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-laImg-top" src={laImg2} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Jolly City</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              See Rental
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-laImg-top" src={laImg3} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">LA Palace</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn-primary">
              See Rental
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-laImg-top" src={laImg4} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Thr City BLock</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              See Rental
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaList;
