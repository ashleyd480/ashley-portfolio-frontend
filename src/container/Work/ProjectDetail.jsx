import { fetchData } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailInfo from "../../components/ProjectDetailInfo/ProjectDetailInfo";

const ProjectDetail = () => {

  
    const [projectDetail, setProjectDetail] = useState([]);
    const [error, setError] = useState("")
    const id = useParams(); // Get the ID parameter from the URL
    const projectIdString = id.projectId; //id was displaying as an object with placeId as attribute 
    const projectId = parseInt(projectIdString);
    console.log(id);
    console.log(projectId)
    console.log (projectDetail)
    useEffect(() => {
        const fetchProjectDetailData = async () => {
            try {
                const responseData = await fetchData(`projects/${projectId}`);
                if (!responseData.hasError) {
                    setProjectDetail(responseData.data);
                    console.log(responseData.data)
                } else {
                    setError(
                        responseData.error || "An error occurred while fetching project data."
                    );
                }
            } catch (error) {
                setError("A connection error occurred while fetching project data.");
            }
        };
        fetchProjectDetailData();
    }, []);

    // we map the array of project data - responsedata.data (key value pair)
    // we map it to each to a ProjectCard
    return (
        <div className="content">
            <h1> {projectDetail.projectName}</h1>
            <div>
                {projectDetail ? (
                    
                        <ProjectDetailInfo project={projectDetail} />
                    )
                 : (
                    <h4>{error}</h4>
                )}
            </div>
        </div>
    );
    
}
  export default ProjectDetail;