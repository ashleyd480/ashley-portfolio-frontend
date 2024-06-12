import Stack from "react-bootstrap/Stack";

const ProjectDetailInfo = ({ project }) => {
  console.log(project);
  return (
    <>
      <Stack gap={3}>
        <div className="p-2">
          <img src={project.projectHeaderImage} alt={project.projectName}></img>
          <br></br>
          <br></br>
          <p>
            {" "}
            <strong> Date Completed: </strong> {project.dateCompleted}{" "}
          </p>
          <p>
            {" "}
            <strong>Skills: </strong>{" "}
                      {project.skills && project.skills.map((skill, skillIndex) => (
                          <span key={skillIndex}>
                              {skill.skillName}
                          </span>))}
          </p>
        </div>
              <div className="p-2">
              <strong> Overview: </strong>{" "}
                  <p>{project.projectBlurb}</p>{" "}
                  <strong> User Experience: </strong>{" "}
                  <p>{project.projectUX}</p>{" "}
        </div>
        <div className="p-2">
        <p> <strong> Demo: </strong>{" "} </p>
       
          <iframe
            width="560"
            height="315"
            src={project.projectVideo}
            title={project.projectName}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Stack>
    </>
  );
};

export default ProjectDetailInfo;
