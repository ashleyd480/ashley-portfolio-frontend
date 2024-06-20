import { managerFeedback } from "../../utils/managerFeedback";

const Manager = () => {
  return (
    <div>
      <h2 className="blurb-title">Manager Feedback</h2>
      <div className="blurb-header">
        <p>
          The Boost team works diligently behind the scenes. Even prior to the
          start of the program, they poured in countless hours to make sure all
          our resumes and letters were hand-reviewed, showing how much they
          truly care.{" "}
        </p>
        <p>
         Since then, they haven't stopped being caring. Our BOOST manager Dom has been one of our greatest cheerleaders. On Day 2, Dom even personally came up to me to cheer me on and she has continually helped uplift me and encouraged me to be kind to myself and to believe in myself.
        </p>
        Attached are screenshots manager feedback from: 
        <ul>
          <li> Slack comments </li>
          <li> Async meeting comments </li>
        </ul>
       
      </div>

      <hr className="seperate-line" />
      <div className="image-container blurb-header">
        {managerFeedback.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="image-item" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Manager;
