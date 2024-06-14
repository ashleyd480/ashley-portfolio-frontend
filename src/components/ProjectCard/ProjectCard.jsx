import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-content">
      <Card>
        <Card.Img
          variant="top"
          src={project.projectHeaderImage}
          alt={project.projectName}
          className="project-custom-card-img"
        />
        <Card.Body>
          <Card.Title className="card-title-custom">
            {project.projectName}
          </Card.Title>
          <Card.Text className="card-text-custom">
            {" "}
            <strong> Date Completed: </strong> {project.dateCompleted}
          </Card.Text>
          <Card.Text className="project-card-text-custom">
            {" "}
            <strong>Project Type: </strong> {project.projectType}
          </Card.Text>
          <Card.Text className="project-card-text-custom">
            <strong> Skills: </strong>{" "}
            {project.skills.map((skill) => skill.skillName).join(", ")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush"></ListGroup>
        <Card.Body>
          <Link to={`/work/projects/${project.projectId}`}>
            <Button>See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
