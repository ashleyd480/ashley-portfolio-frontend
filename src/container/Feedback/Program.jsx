import { programFeedback } from '../../utils/programFeedback';

const Program= () => {
  // Filter images by category
  const teacherFeedbackImages = programFeedback.filter(image => image.imageCategory === 'teacher-feedback');
  const capstoneFeedbackImages = programFeedback.filter(image => image.imageCategory === 'capstone-feedback');
  const projectFeedbackImages = programFeedback.filter(image => image.imageCategory === 'project-feedback');

  return (
    <div>
      <h2 className="blurb-title">Program Feedback Images</h2>
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

      {/* Teacher Feedback Images */}
      <h2 className="feedback-blurb-title">Teacher Feedback</h2>
      <div className="image-container blurb-header">
        {teacherFeedbackImages.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="image-item"
            />
          </div>
        ))}
      </div>

      <hr className="seperate-line"/>

      {/* Capstone Feedback Images */}
      <h2 className="feedback-blurb-title">Capstone Feedback</h2>
      <div className="image-container blurb-header">
        {capstoneFeedbackImages.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="image-item"
            />
          </div>
        ))}
      </div>

      <hr className="seperate-line"/>

      {/* Project Feedback Images */}
      <h2 className="feedback-blurb-title">Other Project Feedback</h2>
      <div className="image-container blurb-header">
        {projectFeedbackImages.map((image, index) => (
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
  export default Program;