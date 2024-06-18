import { adhocFeedback } from '../../utils/adhocFeedback';

const Adhoc = () => {


  const peerFeedbackImages = adhocFeedback.filter(image => image.imageCategory === "peer-feedback");
  const teamFeedbackImages = adhocFeedback.filter(image => image.imageCategory === "team-feedback");


  return (
      <div>
          {/* <img src={peerTest} />
          <img src={peer1} /> */}
         
      <h2 className="blurb-title">Adhoc Feedback Images</h2>

      {/* Peer Feedback Images */}
     
      <h2 className="blurb-title">Peer Feedback</h2>

          <div className="image-container blurb-header">
        {peerFeedbackImages.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
                    alt={image.alt}
                      className= "image-item"
            />
             { console.log(image.src) }
          </div>
        ))}
      </div>

      {/* Team Feedback Images */}

      <h2 className="blurb-title">Team Feedback</h2>

          <div className="image-container blurb-header">
        {teamFeedbackImages.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
                    alt={image.alt}
                    className= "image-item"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  

  export default Adhoc;