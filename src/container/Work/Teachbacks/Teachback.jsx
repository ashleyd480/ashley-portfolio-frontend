import React, { useState, useEffect } from "react";
import "./Teachbacks.css"
const Teachbacks = () => {
  const [videos, setVideos] = useState([]);
  const playlistId = 'PL97VrtuAfZm_Cs85D8DYnlK7saz852a6y';
  const apiKey = import.meta.env.VITE_YOUTUBE_KEY;

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        const sortedVideos = data.items.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt));
        setVideos(sortedVideos); // Set the videos state with sorted videos
      })
      .catch(error => console.error('Error fetching playlist:', error));
  }, []);

  return (
    <>
      <h2 className="blurb-title">Teachbacks 🐾</h2>
      <div className="blurb-section">
        <p>
          {" "}
          Throughout my learning, I have found being able to explain the concept
          back to myself to be invaluable.{" "}
        </p>
        <p>
          {" "}
          Talking through it while having the code in front of me helps me to
          simulataneously visualize the code flow and think through the
          understanding.{" "}
        </p>
        <p>
          {" "}
          Most times I would record a teachback if I struggled through a tough
          homework or if I wanted to slow down and marinate on a more complex
          lecture. Sometimes I would even record one right after class to ensure
          I remembered exactly what the teacher explained and parrot it back to
          myself.{" "} 🎬
        </p>
        <p>
          {" "}
          I was also able to share some of these teachbacks to my cohorts for
          complex topics such as this{" "}
          <a href="https://www.youtube.com/watch?v=xMZj8bgDpvU" target="_blank">
            one
          </a>
          {" "}  on how to connect frontend and backend
        </p>
        <p>
          {" "}
          This <a href="https://www.youtube.com/watch?v=yA2RyRNSu7E&list=PL97VrtuAfZm_Cs85D8DYnlK7saz852a6y" target="_blank">
            playlist
          </a> also offers personal value as I can have a library of
          videos to go back to reference.{" "}
        </p>
      </div>
      <hr className="seperate-line" />
  
      <h2 className="secondary-blurb-title">My YouTube Playlist</h2>
  
      <div className="blurb-section">

        {videos.map(video => (
       
          <div key={video.id} className="playlist-item">
          <img
            className="teachback-video"
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

export default Teachbacks;

// Date- create new Data object
// toLocaleDateString converts the Date object to a string representing the date portion of the date in the current locale's format.
