import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const DevBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    getBlogs();
}, []);

  // Code credit for call to dev.to api goes to: https://dev.to/tiaeastwood/how-to-use-the-forem-api-to-display-your-devto-blog-posts-on-your-website-easy-3dl3
const getBlogs = async () => {
    try {
        const responseData = await fetch(
            "https://dev.to/api/articles?username=ashleyd480",
        );
      // "asynchronously parses the response body as JSON"
        const json = await responseData.json();
      setBlogs(json);
      console.log(json);
    } catch (error) {
      console.log("error", error);
      setError("Error fetching blogs. Please try again later."); // Set error message
    }
};
    return (
   
        <div>
      <h2 className="blurb-title">My Dev To Blogs</h2>
      <div className= "card-container">
      {blogs ? (
        <div>
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      ) : (
        <p>{error}</p>
      )}
    
      </div>
    </div>
 
    );
  
}
  export default DevBlog;