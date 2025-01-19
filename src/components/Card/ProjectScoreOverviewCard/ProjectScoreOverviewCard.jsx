
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Card, Button, Collapse } from 'react-bootstrap';

const ProjectScoreOverviewCard = ({ project }) => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const showScoreDetails= () => {
    if (project.projectName === "access-map-app-capstone") {
        navigate("/kpis/project-scores/capstone-score");
    } else if (project.projectName === "league-app-jpa-spring") {
        navigate("/kpis/project-scores/league-app-score");
    } else if (project.projectName === "referral-site-api-backend") {
        navigate("/kpis/project-scores/spring-backend-score");
    } 
};

    return (
        <>
        <div className="project-cards">
        <Card key={project.projectId} className="mb-3 project-card">
      <Card.Header className="card-header-custom">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls={`collapse-content-${project.projectId}`}
          aria-expanded={open}
          variant="link"
          className="card-title-custom"
        >
          {project.projectName}
        </Button>
      </Card.Header>
      <Collapse in={open}>
        <div id={`collapse-content-${project.projectId}`}>
          <Card.Body>
            <Card.Text className="card-text-custom">
              <strong>Date completed:</strong> {project.dateCompleted}
            </Card.Text>
            <Card.Text className="card-text-custom">
              <strong>Project blurb:</strong> {project.shortDesc}
            </Card.Text>
            <Card.Text className="card-text-custom">
              <strong>Instructor comment:</strong>
              <br />
              {project.instructorOverallComment}
            </Card.Text>
            {project.hasScore && (
              <Card.Footer className="card-footer-custom">
              
                  <Button variant="primary" onClick = {showScoreDetails}>See Score</Button>
              
              </Card.Footer>
            )}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
          
        </div>
      </>
   
   
      );
    };
  
  export default ProjectScoreOverviewCard;