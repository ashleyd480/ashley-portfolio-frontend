import { mentorFeedback } from "../../utils/mentorFeedback";

const Mentor = () => {
  return (
    <div>
    <h2 className="blurb-title">Mentor Feedback Images</h2>
    <div className="blurb-header">
      <p>
        Here is a gallery of some feedback that I have received during the first phase of the BOOST program, when we did the 4 month long bootcamp.
            </p>
            Attached are screenshots of:
            <ul>
                <li> Teacher Feedback </li>
                <li> Capstone Feedback </li>
                <li> Other Project Feedback </li>
            </ul>
      <p>
      Though the bootcamp was tough, the supportive teachers and peers meant so much. Cheering each other on, we made it togeher through the first leg of our journey. 
      </p>
    </div>

    <hr className="seperate-line" />


      <div className="image-container blurb-header">
        {mentorFeedback.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="image-item"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  
  export default Mentor;