import { useEffect, useState } from "react";
import BlogCard from "../../components/Card/BlogCard/BlogCard";
import devtoTrusted from "../../assets/dev.to-trusted.png";
import devtoTrustedDesc from "../../assets/dev.to-trusted-desc.png";
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
        "https://dev.to/api/articles?username=ashleyd480&t=${Date.now()}"
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

  // added error handling for if no blogs returned or if error for API call
  return (
    <div>
      <h2 className="blurb-title">My Dev To Blogs 🐾</h2>
      <div className="blurb-section">
        <p>
          {" "}
          I blog about my learnings from debugging, project retros, as well as
          write about concepts learned. ✍ (Here is a link to my{" "}
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
          In May 2024, I was selected to be a Trusted Member on Dev.To. (You can
          read more about this program{" "}
          <a href="https://dev.to/trusted-member" target="_blank">
            here
          </a>
          ){" "}
        </p>
      </div>
      <div className="image-container">
        <img
          src={devtoTrusted}
          width="500"
          height="400"
          alt="dev.to trusted member nomination"
          className="dev-blog-email-image"
        />
        <img
          src={devtoTrustedDesc}
          width="500"
          height="300"
          alt="dev.to trusted member description"
          className="dev-blog-email-image"
        />
      </div>

      <hr className="seperate-line" />
      <div className="card-container">
        {error ? (
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
