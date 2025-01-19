import { fetchData } from "../../../api/api";
import { useState, useEffect } from "react";
import { projectData } from "../../../utils/Data/projectDataCSV";
import ProjectCard from "../../../components/Card/ProjectCard/ProjectCard";


const Projects = () => {
  // const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProjectData = async () => {
  //     try {
  //       const responseData = await fetchData("projects");
  //       if (!responseData.hasError) {
  //         const sortedData = responseData.data.sort((a, b) => a.projectId - b.projectId);
  //         setProjectData(sortedData);
  //       } else {
  //         setError(
  //           responseData.error ||
  //             "An error occurred while fetching project data."
  //         );
  //       }
  //     } catch (error) {
  //       setError("A connection error occurred while fetching project data.");
  //     }
  //   };
  //   fetchProjectData();
  // }, []);

  // we map the array of project data - responsedata.data (key value pair)
  // we map it to each to a ProjectCard and the unique key is provided by project id
  return (
      <div >
         
          <h2 className= "blurb-title">Projects 🐾</h2>
          <div className="blurb-section">
        <p> Below is a list of mini-projects and projects completed during the bootcamp (additionally including our pre-work and the capstone). 💕 </p>
        <p> After the bootcamp, I continued to work on some projects that were of personal interest to me. These were not assigned, but done rather when I saw opportunities to automate or build a tool to help others make their tasks easier.  </p>
        <p> Each card includes the title of the project, the data completed, project type, and skills used. (Note: Formal projects represent our three required week-long projects and our final two-week long capstone. Mini-projects are projects at a smaller scale that are worked on as homeworks. Formal and mini projects are done independently, whereas pair projects are done with a partner. Personal projects represent projects completed after bootcamp.) </p>
      
        <p> Click the link under each card to open up the project details page. </p>
      
      </div>
      <hr className= "seperate-line"/>
      <div className="d-flex flex-wrap card-container">
      {error ? (
        <div className= "error-container">
            <h4 className="error-header">{error}</h4>
            <h4>
      Please visit my github  <a href="https://github.com/ashleyd480" target="_blank">profile</a> instead for details.
    </h4>
      </div>
      ) : (
        projectData &&
        projectData.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))
      )}
    </div>
    </div>
  );
};

export default Projects;
