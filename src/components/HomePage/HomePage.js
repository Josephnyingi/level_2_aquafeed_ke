import child from "./child.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="about-page">
      <div className="about-dets">
        <h2>Our Story</h2>
        <h4>Complete Nutrition For All Type Of Fish</h4>
        <p>
          We enable small scale aquaculture farmers have access to a wide
          variety of high quality aqua feeds from fish feed manufacturers and
          dealers, from across the country.
        </p>
      </div>
      <div className="about-img">
        <img src={child} alt="child holding fish" className="child-img" />
      </div>
    </div>
  );
};

export default HomePage;
