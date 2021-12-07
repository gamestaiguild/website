import { Link } from "react-router-dom";

const ProjectsList = (props) => {
  const { img, projectName, projectContent, projectId, isComingSoon } = props;
  return (
    <div className="project-box">
      <div className="project-image">
        <img className={isComingSoon ? "blur-poster" : ""} src={img} alt="" />
        {isComingSoon && <h1 className="coming-soon">Coming Soon...</h1>}
      </div>
      <div className="project-desc">
        <h2 className="project-title">{projectName}</h2>
        <p className="project-content">{projectContent}</p>
       {!isComingSoon && <div className="project-btn-wrapper">
          <Link to={`/project/${projectId}`}>Read more</Link>
        </div>}
      </div>
    </div>
  );
};

export default ProjectsList;
