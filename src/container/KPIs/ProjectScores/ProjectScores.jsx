import { fetchData } from "../../../api/api";
import { useState, useEffect } from "react";
import ProjectScoreOverviewCard from "../../../components/Card/ProjectScoreOverviewCard/ProjectScoreOverviewCard";
import ExcelDownloadLink from "../../../components/DownloadFile/ExcelDownloadLink/ExcelDownloadLink";
import "./ProjectScores.css";

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
            responseData.error ||
              "An error occurred while fetching project scores."
          );
        }
      } catch (error) {
        setError("A connection error occurred while fetching project scores.");
      }
    };
    fetchProjectScoreOverview();
  }, []);

  return (
    <>
      <h2 className="blurb-title">Project Scores 🐾</h2>
      <div className="blurb-section">
        <p>
          {" "}
          Below are the projects we worked on in General Assembly, along with
          the overall instructor comment and a link to see the full scores.{" "}
        </p>
      </div>
      <hr className="seperate-line" />
      <div className="overview-container">
        {error ? (
          <div className="error-container">
            <h4 className="error-header">{error}</h4>
            <ExcelDownloadLink />
          </div>
        ) : (
          projectScoreOverview &&
          projectScoreOverview.map((project) => (
            <ProjectScoreOverviewCard
              key={project.projectId}
              project={project}
            />
          ))
        )}
      </div>
    </>
  );
};
export default ProjectScores;
