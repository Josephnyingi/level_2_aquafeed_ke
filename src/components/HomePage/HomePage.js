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
        <p>
          A fish farmer who is using high-quality feeds on their farm may be
          able to see many benefits. For example, the fish on the farm may be
          healthier and have better growth rates, which can lead to higher
          yields and a better return on the farmer's investment. Additionally,
          the use of high-quality feeds can help to reduce the risk of disease
          on the farm, which can save the farmer money on treatments and prevent
          significant losses. Furthermore, the farmer may be able to sell their
          fish for a higher price on the market, as healthy fish are often more
          desirable to buyers. Overall, the use of high-quality feeds on a fish
          farm can be very beneficial, and a fish farmer who is using these
          feeds may be very happy with the results.
        </p>
      </div>
      <div className="about-img">
        <img src={child} alt="child holding fish" className="child-img" />
      </div>
    </div>
  );
};

export default HomePage;
