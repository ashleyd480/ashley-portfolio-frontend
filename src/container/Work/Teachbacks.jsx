import React, { useState, useEffect } from 'react';

const Teachbacks = () => {
  // const [videos, setVideos] = useState([]);
  // const playlistId = 'PL97VrtuAfZm_Cs85D8DYnlK7saz852a6y';
  // const apiKey = 'INSERT HERE';

  
  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=20&key=${apiKey}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Fetched data:', data); // Log the fetched data
  //       setVideos(data.items); // Set the videos state
  //     })
  //     .catch(error => console.error('Error fetching playlist:', error));
  // }, []);

    return (
    <>
       {/* <h2 className= "blurb-title">Teachbacks </h2>
          <div className="blurb-header">
          <p> Throughout my learning, I have found being able to explain the concept back to myself to be invaluable. </p>
          <p> Talking through it while having the code in front of me helps me to simulataneously visualize the code flow and think through the understanding. </p>
          <p> Sometimes, I would record one of these right after the class to ensure I remembered exactly what the teacher explained and parrot it back to myself. </p>
          <p> I was also able to share some of these teachbacks to my cohorts for complex topics such as the one on Microservices. </p>
          <p> This playlist also offers personal value as I can have a library of videos to go back to refernce. </p>
        </div>
        <div>
      <h1>My YouTube Playlist</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {videos.map(video => (
            <div key={video.id}>
              <h3>{video.snippet.title}</h3>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}&list=${playlistId}`, '_blank')}
              />
            </div>
          ))}
        </div>
      
      </div>
        </div> */}
        </>
  );
};
  

  export default Teachbacks;