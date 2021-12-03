import React, { useEffect, useState } from "react";
import IndicatorPagination from "../../components/innerpage-pagination/IndicatorPagination";
import proimg from "../../assets/project-image.png";
import "../../styles/project.scss";
import ProjectsListSlider from "../../components/project/ProjectsListSlider";
import { projectItemList } from "./projectItemList";
import ReactHtmlParser from "react-html-parser";

const Projects = (props) => {
  const [projectDetils, setProjectDetils] = useState({
    innerImag: "",
    projectName: "",
    projectId: "",
    projectImag: "",
    project_desc: "",
    how_owner_earn_from: "",
    earn_desc: [],
    why_section: "",
    why_desc: [],
  });

  useEffect(() => {
    projectItemList.map((item) => {
      if (item.id === props.match.params.id) {
        setProjectDetils({
          innerImag: item.project_inner_img,
          projectName: item.project_name,
          projectId: item.id,
          projectImag: item.project_img,
          project_desc: item.project_desc,
          how_owner_earn_from: item.how_owner_earn_from,
          why_section: item.why_section,
          earn_desc: item.how_owner_earn_from.earn_desc,
          why_desc: item.why_section.why_desc,
        });
      }
      return null;
    });
    return () => {};
  }, [props]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div className="project-page-container">
      <div
        className="main-project-image"
        style={{ backgroundImage: `url(${projectDetils?.projectImag})` }}
      >
        <div className="project-image-container">
          <IndicatorPagination caret={projectDetils?.projectName} />
          <div className="pagination-title-wrapper">
            <h1>{projectDetils?.projectName}</h1>
          </div>
        </div>
      </div>
      <div className="project-innerpage">
        <div className="tab-content">
          <ul>
            <li className="tab-content-list">
              <div className="tab-content-left">
                <img
                  src={
                    projectDetils?.innerImag ? projectDetils?.innerImag : proimg
                  }
                  alt=""
                />
              </div>
              <div className="tab-content-right">
                {projectDetils && ReactHtmlParser(projectDetils?.project_desc)}
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>01</span>
                <h2>
                  {projectDetils && projectDetils?.how_owner_earn_from.titel}
                </h2>
              </div>
              <div className="tab-content-right">
                <ul className="list">
                  {projectDetils &&
                    projectDetils?.earn_desc.map((item, index) => (
                      <li key={index} className="how_owner_list">
                        {item.how_owner_desc}
                      </li>
                    ))}
                </ul>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>02</span>
                <h2>{projectDetils && projectDetils.why_section.titel}</h2>
              </div>
              <div className="tab-content-right">
                <div className="list why_list_div">
                  <ul className="why_list_ul">
                    {projectDetils &&
                      projectDetils?.why_desc.map((item, index) => (
                        <li key={index} className="why_list">
                          {ReactHtmlParser(item.why_sub_desc)}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="pro-sec">
        <h2 className="project-wrapper-title">Other projects</h2>
        <div className="project-box-wrapper">
          <ProjectsListSlider projectId={props.match.params.id} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
