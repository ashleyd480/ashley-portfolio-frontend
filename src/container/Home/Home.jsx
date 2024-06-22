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
        <p>Thank you for stopping by! Here's a quick tour of my page:</p>
        <h5> About </h5>
        <ul>
          <li>
            My Story: a peek into my journey, who I am, and the why behind my
            interest in software
          </li>
          <li>
            Experience: my professional work experience and highlights of
            projects doen at Indeed
          </li>
          <li>
            Hobbies: my volunteer work as a Google Maps Local Guide and Connect
            writer, and Google AI crowdsoucer
          </li>
        </ul>
        <h5> Work </h5>
        <ul>
          <li>
            Projects: a list of mini-projects and projects completed during
            bootcamp
          </li>
          <li>
            Teachbacks: videos I've created to teach software content back to
            myself and share knowledge with others
          </li>
          <li>
            Dev Blog: blogs on my learning from debugging and project retros, and concepts learned
          </li>
        </ul>
        <h5> KPIs </h5>

        <ul>
          <li>
            Placeholder: to add 
          </li>
          
        </ul>
        <h5> Feedback </h5>
        <ul>
          <li>
            Placeholder: to add 
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Home;
