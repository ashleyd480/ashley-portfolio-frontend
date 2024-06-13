import { Card, Button } from "react-bootstrap";
import "./BlogCard.css"

const BlogCard = ({ blog }) => {
  return (
    <Card className= "project-card-content">
          <Card.Img variant="top"
              src={blog.social_image}
              alt="blog cover image"
              className="blog-custom-card-img"/>
      <Card.Body>
        <Card.Title className="project-card-title-custom">{blog.title}</Card.Title>
        <Card.Text className="blog-card-text-custom">
          <strong>Date Published: </strong> {blog.published_at} <br />
          <strong> Time To Read (Minutes): </strong> {blog.reading_time_minutes}
        </Card.Text>
        <Button variant="primary" href={blog.url} target="_blank">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
