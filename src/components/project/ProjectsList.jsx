import { Link } from "react-router-dom";

const ProjectsList = (props) => {
  const { img, projectName, projectContent, projectId } = props;
  return (
    <div className="project-box">
      <div className="project-image">
        <img src={img} alt="" />
      </div>
      <div className="project-desc">
        <h2 className="project-title">{projectName}</h2>
        <p className="project-content">{projectContent}</p>
        <div className="project-btn-wrapper">
          <Link to={`/project/${projectId}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
