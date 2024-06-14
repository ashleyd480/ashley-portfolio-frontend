import { fetchData } from "../../../api/api";
import { useState, useEffect } from "react";
import ProjectScoreOverviewCard from "../../../components/KPITable/ProjectScoreOverviewCard/ProjectScoreOverviewCard";
import "./ProjectScores.css"

const ProjectScores = () => {
  const [projectScoreOverview, setProjectScoreOverivew] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectScoreOverview = async () => {
      try {
        const responseData = await fetchData("scores/project-score-overview");
        if (!responseData.hasError) {
          setProjectScoreOverivew(responseData.data);
          console.log(responseData.data);
        } else {
          setError(
            responseData.error || "An error occurred while fetching GA scores."
          );
        }
      } catch (error) {
        setError("A connection error occurred while fetching GA scores.");
      }
    };
    fetchProjectScoreOverview();
  }, []);

  return (
    <>
      <h2 className="blurb-title">Project Scores </h2>
      <div className="blurb-header">
        <p>
          {" "}
          Below are the projects we worked on in General Assembly, along with
          the overall instructor comment and a link to see the full scores. {" "}
              </p>
             
          </div>
          <div className = "overview-container">
      {projectScoreOverview ? (
        projectScoreOverview.map(project => (
          <ProjectScoreOverviewCard key={project.projectId} project={project}  />
        ))
      ) : (
        <h4>{error}</h4>
      )}
    </div>
    </>
  );
};
export default ProjectScores;
