import { fetchData } from "../../api/api";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const responseData = await fetchData("projects");
        if (!responseData.hasError) {
          setProjectData(responseData.data);
          console.log(responseData.data);
        } else {
          setError(
            responseData.error ||
              "An error occurred while fetching project data."
          );
        }
      } catch (error) {
        setError("A connection error occurred while fetching project data.");
      }
    };
    fetchProjectData();
  }, []);

  // we map the array of project data - responsedata.data (key value pair)
  // we map it to each to a ProjectCard and the unique key is provided by project id
  return (
    <div className="content">
      <h1>These are my projects</h1>
      <div>
        {projectData ? (
          projectData.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))
        ) : (
          <h4>{error}</h4>
        )}
      </div>
    </div>
  );
};

export default Projects;
