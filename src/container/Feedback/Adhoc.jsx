import { adhocFeedback } from "../../utils/adhocFeedback";

const Adhoc = () => {
  const peerFeedbackImages = adhocFeedback.filter(
    (image) => image.imageCategory === "peer-feedback"
  );
  const teamFeedbackImages = adhocFeedback.filter(
    (image) => image.imageCategory === "team-feedback"
  );

  return (
    <div>
      <h2 className="blurb-title">Adhoc Feedback Images</h2>
      <div className="blurb-header">
        <p>
          Here is a gallery that shows a preview of feedback that I have recieved from teammates
          as well as peers outside of the Boost team. Since my time at Indeed, I
          have kept a running Google Doc of positive feedback received. I
          treasure these kind words as they have brought me innumerable smiles,
          reminding me to give myself grace even at moments when I could only
          see mistakes in myself.
        </p>
        <p>
          That is why I enjoy writing Indeed feedback for others too,
          celebrating wins small and big. Sometimes even the simplest of words
          can bring the greatest joy to others. Thank you Indeedians for
          bringing such a supportive and warm environment.
        </p>
      </div>

      <hr className="seperate-line" />


      {/* Peer Feedback Images */}

      <h2 className="feedback-blurb-title">Peer Feedback</h2>

      <div className="image-container blurb-header">
        {peerFeedbackImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="image-item" />
            {console.log(image.src)}
          </div>
        ))}
      </div>

      <hr className="seperate-line" />

      {/* Team Feedback Images */}

      <h2 className="feedback-blurb-title">Team Feedback</h2>

      <div className="image-container blurb-header">
        {teamFeedbackImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="image-item" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adhoc;
