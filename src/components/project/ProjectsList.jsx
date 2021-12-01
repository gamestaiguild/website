
import { Link } from 'react-router-dom';
import proimg from '../../assets/project-image.png';

const ProjectsList = (props) => {
    const { img, projectName, projectContent } = props
    return(
        <div className="project-box">
              <div className="project-image">
                  <img src={img} />
              </div>
              <div className="project-desc">
                  <h2 className="project-title">{projectName}</h2>
                  <p className="project-content">{projectContent}</p>
                  <div className="project-btn-wrapper">
                      <Link to="/project/1">Read more</Link>
                  </div>
              </div>
            </div>
    )
}

export default ProjectsList