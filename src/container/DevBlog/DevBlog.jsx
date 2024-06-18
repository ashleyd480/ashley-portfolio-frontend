import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import devtoTrusted from "../../assets/dev.to-trusted.png";
import "./DevBlog.css";

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
        "https://dev.to/api/articles?username=ashleyd480"
      );
      const json = await responseData.json();
      
      if (json.length === 0) {
        setError("No blogs found."); // Set error message if blogs array is empty
      } else {
        setBlogs(json);
        console.log(json);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Error fetching blogs. Please try again later."); // Set error message for fetch error
    }
  };
  return (
    <div>
      <h2 className="blurb-title">My Dev To Blogs</h2>
      <div className="blurb-header">
        <p>
          {" "}
          I blog about my learnings from debugging, project retros, as well as
          write about concepts learned. (Here is a link to my{" "}
          <a
            href="https://dev.to/ashleyd480"
            target="_blank"
        
          >
            profile
          </a>
          ) and you can see my blogs below.{" "}
        </p>
        <p>
          {" "}
          My hope is to make a more inclusive community on dev.to by building
          beginner friendly content and also showing how we can embrace and
          learn from bugs and setbacks.{" "}
        </p>
        <p>
          {" "}
          In May 2024, I was selected to be a Trusted Member on Dev.To. (You can
          read more about this program here{" "}
          <a
            href="https://dev.to/trusted-member"
            target="_blank"
          >
            here
          </a>
          ){" "}
        </p>
        <img
          src={devtoTrusted}
          width="500"
          height="400"
          alt="dev.to trusted member nomination"
          className="email-image"
        />
      </div>
      <hr className= "seperate-line"/>
      <div className="card-container">
  {error ?(
    <h4 className="error-header">{error}</h4>
  ) : (
    blogs && (
      <div>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    )
  )}
</div>
    </div>
  );
};
export default DevBlog;
