import Stack from "react-bootstrap/Stack";
import "./ProjectDetailInfo.css";

const ProjectDetailInfo = ({ project }) => {
  console.log(project);
  // stack ensures items are stacked vertically and gap of 3
  return (
    <>
      <Stack gap={3}>
        <div className="p-2">
          <div className="project-image-container">
            <img
              src={project.projectHeaderImage}
              alt={project.projectName}
              className="project-image"
            />
          </div>
          <hr className="seperate-line" />
          <p>
            {" "}
            <strong> Date Completed: </strong> {project.dateCompleted}{" "}
          </p>
          <p>
            {" "}
            <strong>Skills: </strong>{" "}
            {project.skills &&
              project.skills.map((skill) => skill.skillName).join(", ")}
          </p>
        </div>
        <hr className="seperate-line" />
        <div className="p-2">
          <strong> Overview: </strong> <p>{project.projectBlurb}</p>{" "}
          <strong> User Experience: </strong> <p>{project.projectUX}</p>{" "}
          <strong> Github Repo: </strong> <p>{project.projectURL}</p>{" "}
        </div>
        {project.projectVideo !== null && (
          <div className="p-2">
            <p>
              {" "}
              <strong> Demo: </strong>{" "}
            </p>

            <iframe
              className="youtube-video"
              src={project.projectVideo}
              title={project.projectName}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Stack>
    </>
  );
};

export default ProjectDetailInfo;
