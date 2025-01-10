import welcomeCat from "../../assets/welcome-cat.png";
import LastUpdated from "../../container/Home/LastUpdated";

const Home = () => {
  // maxWidth: '100%': This ensures that the image will never exceed its original width (500 pixels in this case) but will scale down if the container (or viewport) is narrower than 500 pixels.
  return (
    <div>
      <h2 className="blurb-title"> 🐾 Hello human! 🐾 </h2>
      <div className="centered-image-container">
        <img
          src={welcomeCat}
          width="300"
          height="300"
          alt="dev.to trusted member nomination"
        />
       
      </div>
      
      <div className="blurb-section">
        <p>Thank you for stopping by! Here's a quick tour of my page. </p>
        <LastUpdated /> 
        <p>My portfolio is created as fullstack app with data hosted on Postgres and backend API endpoints on Springboot. The frontend renders the data and info about me:</p>
        <p>Through my time in the BOOST apprenticeship, I was able to use the technical knowledge we learned along with my passion for inclusion and helping others. My first project was a frontend where users could share job referral opportunities. My capstone was a full-stack project where users can crowdsource accessibility info on Google Maps and search for accessible places. I also wrote about my learnings from bootcamp, making a cheat sheet for Spring Boot beginners and sharing it on dev.to. Additionally, I created close-captioned teachbacks of bootcamp concepts and shared tips and tricks with my class, like how to connect frontend and backend during capstone. As you wander through each of my pages, you will be able to see more of my work, what lights a fire in my heart, my scores, and more. </p>
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
            GA Scores: a table of my weekly bootcamp scores along with instructor and mentor comments
          </li>
          <li>
            Project Scores: a list of graded bootcamp projects, with overall instructor comments and a button to see numeric scores where available 
          </li>
          
          
        </ul>
        <h5> Feedback </h5>
        <ul>
          <li>
            Mentor: feedback received from my mentor on Slack
          </li>
          <li>
            Program: GA instructors' feedback, as well as team/peer feedback for capstone and projects received on Slack
          </li>
          <li>
            Manager: feedback received from my manager on Slack as well as in async 1:1s Google Doc comments
          </li>
          <li>
            Adhoc: feedback received from my direct team and other peers on Slack
          </li>
          <li>
            Intern: feedback received from internship during our 3rd phase of apprenticship program 
          </li>
        </ul>
     
        
        <div style={{ textAlign: 'center', marginTop: '40px'}}>
          {/* countdown timer- credit to https://www.timeanddate.com/countdown/ */}
          <iframe 
            src="https://free.timeanddate.com/countdown/i9pcz8e6/n197/cf12/cm0/cu4/ct0/cs0/cac000/co1/cr0/ss0/cac000/cpc000/pct/tcfff/fn2/fs100/tatTime%20till%20Graduation/tac000/tptTime%20since%20Graduation/tpc000/iso2025-03-31T23:59:59"
            allowtransparency="true" 
            frameBorder="0" 
            width="200" 
            height="150">
          </iframe>

        </div>


      </div>
    </div>
  );
};

export default Home;
