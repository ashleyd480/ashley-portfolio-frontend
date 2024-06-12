import { Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";



const ProjectCard = ({ project}) => {
    return (
        <>
     <Link to={`/work/projects/${project.projectId}`}>
            <Card style={{ width: '18rem' }}>
           
          <Card.Img variant="top" src={project.projectHeaderImage} alt={project.projectName} />
          <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Card.Text>Date Completed: {project.dateCompleted}</Card.Text>
            <Card.Text>Project Type: {project.projectType}</Card.Text>
            <Card.Text>
              Skills: {project.skills.map(skill => skill.skillName).join(', ')}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* Maybe let's remove the Click to Learn more? or  */}
          </ListGroup>
          <Card.Body>
            <Card.Link href={project.projectLink}>Click to Learn More</Card.Link>
                    </Card.Body>
                  
                </Card>
                </Link>
            </>
      );
    }
    
  

export default ProjectCard;