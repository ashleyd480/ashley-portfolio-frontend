
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {Card, Button, Collapse } from 'react-bootstrap';


const ProjectScoreOverviewCard = ({ project }) => {

    const [open, setOpen] = useState(false);

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
                <Link to={`/kpis/project-scores/${project.projectId}`}>
                  <Button variant="primary">See Score</Button>
                </Link>
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