import "./FeedbackImageMap.css"

const ImageMap = ({ images }) => {
    return (
      <div className="feedback-image-container blurb-section">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="feedback-image-item" />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageMap;