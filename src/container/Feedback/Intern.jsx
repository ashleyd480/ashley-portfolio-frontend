import { internFeedback } from '../../utils/iinternFeedback';
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; 

const Intern = () => {
  return (
    <div>
      <h2 className="blurb-title">Intern Feedback Images 🐾</h2>
      <div className="blurb-section">
        <p>
          I'm humbly grateful for the internship opportunity, and to have the chance to learn with so many amazing and kind wizards. I will be using this space to document some screenshots of positive feedback. 
      
        </p>
 
      
      </div>

      <hr className="separate-line" />
      <ImageMap images={internFeedback} /> {/* Use ImageMap component */}
    </div>
  );
}

export default Intern