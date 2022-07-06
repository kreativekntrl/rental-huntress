import img1 from "../images/building1.jpg";
import img2 from "../images/building2.jpg";
import img3 from "../images/building3.jpg";
import img4 from "../images/building4.jpg";

const LaList = () => {
  return (
    <div>
      <h2>Explore Rentals in Los Angeles, CA</h2>
      <div className="card-group">
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src={img1} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">The High</h5>
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
          <img className="card-img-top" src={img2} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Lamark</h5>
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
          <img className="card-img-top" src={img3} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">La Mesa Heights</h5>
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
          <img className="card-img-top" src={img4} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">758 Broadway</h5>
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
