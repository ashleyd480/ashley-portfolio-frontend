import Stack from "react-bootstrap/Stack";
import "./ProjectDetailInfo.css";

const ProjectDetailInfo = ({ project }) => {
  // Function to convert newline characters to <br /> elements
  /*
  Learning:
  - Use .split() to split a string into an array of substrings aka `line`
  - Use .map() to iterate over the array of `line` and create <span> elements for each line.
  */
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

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
            <strong> Skills: </strong> {project.projectSkills}{" "}
          </p>
        </div>
        <hr className="seperate-line" />
        <div className="p-2">
          <strong> Overview: </strong>
          <p>{renderTextWithLineBreaks(project.projectBlurb)}</p>
          <strong> User Experience: </strong>
          <p>{renderTextWithLineBreaks(project.projectUX)}</p>
          <strong> Github Repo: </strong>
          <strong> Github Repo: </strong> <a href={project.projectURL} target="_blank">{project.projectURL}</a>{" "}
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
