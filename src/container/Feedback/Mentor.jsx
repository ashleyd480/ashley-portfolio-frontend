import { mentorFeedback } from "../../utils/mentorFeedback";
import ImageMap from '../../components/FeedbackImageMap/FeedbackImageMap'; 

const Mentor = () => {
  return (
    <div>
      <h2 className="blurb-title">Mentor Feedback Images 🐾</h2>
      <div className="blurb-section">
        <p>
          My mentor Chad  has been my candle in the water, my light in the storm. We unofficially met on Slack when I was asking question on #tech-help Slack channel for General Assembly prework, and he stood out as one of the kindest individuals. My gut was right.
      
        </p>
 
        <p>
        Thanks to my dear mentor for enlightening not only my mind but my heart too. Thank you for your empathy and for cheeering me on too. Below are some screenshots of positive feedback received from him: 🧡
        </p>
      </div>

      <hr className="separate-line" />
      <ImageMap images={mentorFeedback} /> {/* Use ImageMap component */}
    </div>
  );
}

export default Mentor;