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
      <div className="blurb-header">
        <p>
          {" "}
          I blog about my learnings from debugging, project retros, as well as
          write about concepts learned. (Here is a link to my{" "}
          <a
            href="https://dev.to/ashleyd480"
            target="_blank"
            rel="noopener noreferrer"
          >
            profile
          </a>)
          and you can see my blogs below.{" "}
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
            rel="noopener noreferrer"
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
      <hr />
      <div className="card-container">
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
};
export default DevBlog;
