import "./Videos.css"
const Videos = ({ videos, playlistId }) => {

  return (
    <>
    
      <div className="blurb-section">

        {videos.map(video => (
       
          <div key={video.id} className="playlist-item">
          <img
            className="video"
            src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}&list=${playlistId}`, '_blank')}
          />
          <div className="video-details">
            <h4>{video.snippet.title}</h4>
            <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Videos;