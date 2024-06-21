import { programFeedback } from '../../utils/programFeedback';
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; // Import the ImageMap component

const Program = () => {
  // Filter images by category
  const teacherFeedbackImages = programFeedback.filter(image => image.imageCategory === 'teacher-feedback');
  const capstoneFeedbackImages = programFeedback.filter(image => image.imageCategory === 'capstone-feedback');
  const projectFeedbackImages = programFeedback.filter(image => image.imageCategory === 'project-feedback');

  return (
    <div>
      <h2 className="blurb-title">Program Feedback Images</h2>
      <div className="blurb-section">
        <p>
          Here is a gallery of some feedback that I have received during the first phase of the BOOST program, when we did the 4 month long bootcamp.
        </p>
        Attached are screenshots of:
        <ul>
          <li> teacher feedback </li>
          <li> capstone feedback </li>
          <li> other project feedback </li>
        </ul>
        <p>
          Though the bootcamp was tough, the supportive teachers and peers meant so much. Cheering each other on, we made it together through the first leg of our journey. 🧡
        </p>
      </div>

      <hr className="separate-line" />

      {/* Teacher Feedback Images */}
      <h2 className="feedback-blurb-title">Teacher Feedback</h2>
      <ImageMap images={teacherFeedbackImages} />

      <hr className="separate-line"/>

      {/* Capstone Feedback Images */}
      <h2 className="feedback-blurb-title">Capstone Feedback</h2>
      <ImageMap images={capstoneFeedbackImages} />

      <hr className="separate-line"/>

      {/* Project Feedback Images */}
      <h2 className="feedback-blurb-title">Other Project Feedback</h2>
      <ImageMap images={projectFeedbackImages} />
    </div>
  );
}

export default Program;