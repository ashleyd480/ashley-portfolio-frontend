import { fetchData } from "../../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../../../utils/Data/projectDataCSV";
import ProjectDetailInfo from "../../../components/ProjectDetailInfo/ProjectDetailInfo";

const ProjectDetail = () => {
  // const [projectDetail, setProjectDetail] = useState([]);
  const [error, setError] = useState("");
  const { projectId } = useParams(); // Get the projectId from the URL
  const projectIdNumber = parseInt(projectId); // Convert to a number

  /*
  Learning: 
  Use .find() when you expect to retrieve a single object and want to avoid dealing with arrays
  */
  const projectDetail= projectData.find(project => project.projectId === projectIdNumber);  // const projectIdString = id.projectId; //id was displaying as an object with placeId as attribute
  // const projectId = parseInt(projectIdString);
  // console.log(id);
  // console.log(project.projectId);

  // useEffect(() => {
  //   const fetchProjectDetailData = async () => {
  //     try {
  //       const responseData = await fetchData(`projects/${projectId}`);
  //       if (!responseData.hasError) {
  //         setProjectDetail(responseData.data);
  //         console.log(responseData.data);
  //       } else {
  //         setError(
  //           responseData.error ||
  //             "An error occurred while fetching project details."
  //         );
  //       }
  //     } catch (error) {
  //       setError("A connection error occurred while fetching project details.");
  //     }
  //   };
  //   fetchProjectDetailData();
  // }, []);

  // we map the array of project data - responsedata.data (key value pair)
  // we map it to each to a ProjectCard
  return (
    <div>
      <h2 className="blurb-title"> {projectDetail.projectName}</h2>
      <div className="blurb-section">
        {error ? (
          <>
            <h4 className="error-header">{error}</h4>
            <p>
              {" "}
              Please visit this link
              <a href={"https://github.com/ashleyd480"} target="_blank"></a>
              to see details instead{" "}
            </p>
          </>
        ) : (
          projectDetail && <ProjectDetailInfo project={projectDetail} />
        )}
      </div>
    </div>
  );
};
export default ProjectDetail;
