import { internFeedback } from '../../utils/internFeedback';
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; 

const Intern = () => {
  return (
    <div>
      <h2 className="blurb-title">Intern Feedback Images 🐾</h2>
      <div className="blurb-section">
        <p>
          I'm humbly grateful for the internship opportunity, and to have the chance to learn with so many amazing and kind wizards. 
      
        </p>
 
      
      </div>

      <hr className="separate-line" />
      <h6 style={{ marginLeft: '20px' }}> Note: </h6>
      <p style={{ marginLeft: '20px' }}> Due to time constraints I've added positive feedback screnshots on the following Google Docs instead of manually uploading for now :)</p>
      <ul>
        <li><a href="https://docs.google.com/document/d/1ne5IjG4d-kUOY9wDIjhMcgG1MeJ41uP3aujU74F3phA/edit?tab=t.0#heading=h.26pv2bv2qi1z" target="_blank">2024</a> </li>
        <li><a href="https://docs.google.com/document/d/12Le9Y0cqNIdqL2EEaz2Ry65rdg1VMf5EpxfZ2DP2cIY/edit?tab=t.0#heading=h.9nqenzgrqjnz" target="_blank">2025</a> </li>
        </ul>
      <ImageMap images={internFeedback} /> {/* Use ImageMap component */}

    </div>
  );
}

export default Intern