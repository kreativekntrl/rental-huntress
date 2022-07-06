import img1 from "../images/building1.jpg";
import img2 from "../images/building2.jpg";
import img3 from "../images/building3.jpg";
import img4 from "../images/building4.jpg";
import Jumbotron from "./Jumbotron";
import LaList from './LaList';
import SdList from './SdList';

const Main = ({userInput}) => {
  const allImages = [img1, img2, img3, img4];
  const allStates = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  /**
   *  A tricky way to get a random number between 0 - arr.length
   *  which makes the jumbotron appear random.
   */
  const imageGenerator = allImages[Math.floor(Math.random() * allImages.length)];
  const stateGenerator = allStates[Math.floor(Math.random() * allStates.length)];

  return (
    <div>
      <div>
        {(() => {
          if (userInput === "Los Angeles") {
            return <LaList />;
          } else {
            return <SdList />;
          }
        })()}
      </div>
      <a
        href="#"
        className="btn btn-primary"
        style={{ marginTop: "20px", padding: "10px" }}
      >
        View More
      </a>
      <hr style={{ marginLeft: "25px", marginRight: "25px" }} />
      <Jumbotron img={imageGenerator} state={stateGenerator} />
      <section>
        <h2>Rated Best Site for Renters</h2>
        <p>
          We list thousands of rentals a day, get stated on hunting down the one
          for you
        </p>
        <div></div>
      </section>
    </div>
  );
};

export default Main;