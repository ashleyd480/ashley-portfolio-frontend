import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const DevBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    getBlogs();
}, []);

const getBlogs = async () => {
    try {
        const response = await fetch(
            "https://dev.to/api/articles?username=ashleyd480&per_page=8",
        );
        const json = await response.json();
      setBlogs(json);
      console.log(json);
    } catch (error) {
      console.log("error", error);
      setError("Error fetching blogs. Please try again later."); // Set error message
    }
};
    return (
   
        <div>
      <h1>My Dev To Blogs</h1>
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