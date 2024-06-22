import welcomeCat from "../../assets/welcome-cat.png";

const Home = () => {
  // maxWidth: '100%': This ensures that the image will never exceed its original width (500 pixels in this case) but will scale down if the container (or viewport) is narrower than 500 pixels.
  return (
    <div>
      <h2 className="blurb-title"> 🐾 Hello human! 🐾 </h2>
      <div className="centered-image-container">
        <img
          src={welcomeCat}
          width="500"
          height="400"
          alt="dev.to trusted member nomination"
        />
      </div>
      <div className="blurb-section">
        <p>Placeholder text: Here is a description of the site:</p>
      </div>
    </div>
  );
};

export default Home;
