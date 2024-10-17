import { managerFeedback } from "../../utils/managerFeedback";
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; 

const Manager = () => {
  return (
    <div>
      <h2 className="blurb-title">Manager Feedback 🐾</h2>
      <div className="blurb-section">
        <p>
          The Boost team works diligently behind the scenes. Even prior to the
          start of the program, they poured in countless hours to make sure all
          our resumes and letters were hand-reviewed, showing how much they
          truly care.{" "}
        </p>
        <p>
         Since then, they haven't stopped being caring. Our BOOST managers Dom and Cole have been our greatest cheerleaders. On Day 2, Dom even personally came up to me to cheer me on and she has continually helped uplift me and encouraged me to be kind to myself and to believe in myself. And Cole too- who joined us in the latter half, he has built me up technically as well as in communication skills- and he has been a beacon of support to all of us. 🧡
        </p>
        Attached are screenshots manager feedback from: 
        <ul>
          <li>Slack comments </li>
          <li>Async meeting comments </li>
        </ul>
      </div>

      <hr className="separate-line" />
      <ImageMap images={managerFeedback} /> {/* Use ImageMap component */}
    </div>
  );
};

export default Manager;