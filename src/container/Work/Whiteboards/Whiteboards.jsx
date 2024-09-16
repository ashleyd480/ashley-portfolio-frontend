import React, { useState, useEffect } from "react";
import Videos from "../../../components/Videos/Videos";
  
  
  
const Whiteboards = () => {
  const [videos, setVideos] = useState([]);
  const playlistId = 'PL97VrtuAfZm8HHporK5EotFV5Re-Uo2xg';
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
    console.log("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50")

  return (
    <>
      <h2 className="blurb-title">Teachbacks 🐾</h2>
      <div className="blurb-section">
        <p>
          {" "}
          After our bootcamp concluded, we were assigned to work on Leetcode. We were challenged with self-learning data structures and big 0, as well as how to approach problem solving in code.{" "}
        </p>
        <p>
          {" "}
          While admittedly it was tough at first, I was able to learn many valuable skills and even solidified my Java foundation concept knowledge and built upon it as I explored other data structures. This behind the hood stuff and how really fascinates me! {" "}
        </p>
        <p>
          {" "}
          One thing that I found really helpful was being able to approach the problem layer by layer, first understanding the problem, then breaking it into subproblems, and pseudocoding and mapping out my approach before diving into code. Also, being able to think through and talk through my thinking really was impactful to building my skills and confidence. Because of that, I proactively even set up additional mock practice with not only my mentor but other SWEs too. I really enjoyed diving into and discussing code together. {" "} 💑 
        </p>
        <p>
          {" "}
          As I worked on my Leetcode practices whether it be via mock practices or on my own, I discovered new approaches or aha moments. I documented detailed notes in my Github Leetcode  {" "}
          <a href="https://github.com/ashleyd480/noob-algorithm-code-practice/tree/master/my-leetcode" target="_blank">
          repo
          </a>
          .
        </p>
        <p>
          {" "}
          This <a href= "https://www.youtube.com/playlist?list=PL97VrtuAfZm8HHporK5EotFV5Re-Uo2xg" target="_blank">
            playlist
          </a> below is a library of
          videos that highlights some of the more salient learnings I made through whiteboarding. Being able to teach it back helps me to solidify the technique and concept, and I love having these videos to go back to reference.{" "}
        </p>
      </div>
      <hr className="seperate-line" />
  
      <h2 className="secondary-blurb-title">My YouTube Playlist</h2>
  
      <div className="blurb-section">

        < Videos videos={videos} />
      </div>
    </>
  );
}

export default Whiteboards;
