import welcomeCat from "../../assets/welcome-cat.png";
import "./Home.css"
const Home = () => {

    return (
      <div>
        <h2 className="blurb-title"> 🐾  Hello human! 🐾 </h2>
        <div className="welcome-image-container">
        <img
          src={welcomeCat}
          width="500"
          height="400"
          alt="dev.to trusted member nomination"
          />
          </div>
      <div className="blurb-header">
        <p>
         Placeholder text: Here is a description of the site:
          </p>
          </div>
          </div>
    );
  
}
  
  export default Home;