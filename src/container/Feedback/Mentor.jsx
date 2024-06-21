import { mentorFeedback } from "../../utils/mentorFeedback";
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; 

const Mentor = () => {
  return (
    <div>
      <h2 className="blurb-title">Mentor Feedback Images</h2>
      <div className="blurb-section">
        <p>
          I 
        </p>
        Attached are screenshots of:
        <ul>
            <li> Teacher Feedback </li>
            <li> Capstone Feedback </li>
            <li> Other Project Feedback </li>
        </ul>
        <p>
        Though the bootcamp was tough, the supportive teachers and peers meant so much. Cheering each other on, we made it together through the first leg of our journey. 🧡
        </p>
      </div>

      <hr className="separate-line" />
      <ImageMap images={mentorFeedback} /> {/* Use ImageMap component */}
    </div>
  );
}

export default Mentor;