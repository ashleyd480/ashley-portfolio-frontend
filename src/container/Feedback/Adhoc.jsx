import { adhocFeedback } from "../../utils/adhocFeedback";
import ImageMap from "../../components/FeedbackImageMap/FeedbackImageMap";

const Adhoc = () => {
  const peerFeedbackImages = adhocFeedback.filter(
    (image) => image.imageCategory === "peer-feedback"
  );
  const teamFeedbackImages = adhocFeedback.filter(
    (image) => image.imageCategory === "team-feedback"
  );

  return (
    <div>
      <h2 className="blurb-title">Adhoc Feedback Images 🐾</h2>
      <div className="blurb-section">
        <p>
          Here is a gallery that shows a preview of adhoc feedback that I have received from teammates
          as well as peers outside of the Boost team. Since my time at Indeed, I
          have kept a running Google Doc of positive feedback received. I
          treasure these kind words as they have brought me innumerable smiles,
          reminding me to give myself grace even at moments when I could only
          see mistakes in myself.
        </p>
        <p>
          Sometimes even the simplest of words
          can bring the greatest joy to others. Thank you Indeedians for
          bringing such a supportive and warm environment. These kind words below are dated to the start of the BOOST program and onwards. 🧡
        </p>
      </div>

      <hr className="separate-line" />

      {/* Peer Feedback Images */}
      <h2 className="feedback-blurb-title">Peer Feedback</h2>
      <ImageMap images={peerFeedbackImages} />

      <hr className="separate-line" />

      {/* Team Feedback Images */}
      <h2 className="feedback-blurb-title">Team Feedback</h2>
      <ImageMap images={teamFeedbackImages} />
    </div>
  );
};

export default Adhoc;