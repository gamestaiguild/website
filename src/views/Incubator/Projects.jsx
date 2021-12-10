import React, { useEffect, useState } from "react";
import IndicatorPagination from "../../components/innerpage-pagination/IndicatorPagination";
import proimg from "../../assets/project-image.png";
import "../../styles/project.scss";
import ProjectsListSlider from "../../components/project/ProjectsListSlider";
import { projectItemList } from "./projectItemList";
import ReactHtmlParser from "react-html-parser";

const Projects = (props) => {
  const [isProject, setIsProject] = useState([null]);
  const [projectDetils, setProjectDetils] = useState({
    innerImag: "",
    projectName: "",
    projectId: "",
    projectImag: "",
    project_desc: "",
    extraFields: [],
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
          extraFields: item?.extraFields,
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

  useEffect(() => {
    let id = props.match.params.id;
    let res = projectItemList.filter((item) => {
      return item.id === id;
    });
    setIsProject(res);
    if (res.length === 0) {
      addNotFoundHeader();
    }
    return () => {};
  }, [props.match.params.id]);

  const addNotFoundHeader = () => {
    var el = document.getElementById("header");
    el.classList.add("header-visible");
  };

  useEffect(() => {
    if (isProject && isProject.length === 0) {
      window.addEventListener("scroll", addNotFoundHeader);
    }
    return () => {
      window.removeEventListener("scroll", addNotFoundHeader);
    };
  }, [isProject]);

  return (
    <div className="project-page-container">
      {isProject.length !== 0 ? (
        <>
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
                        projectDetils?.innerImag
                          ? projectDetils?.innerImag
                          : proimg
                      }
                      alt=""
                    />
                  </div>
                  <div className="tab-content-right">
                    {projectDetils &&
                      ReactHtmlParser(projectDetils?.project_desc)}
                  </div>
                </li>

                {projectDetils &&
                  projectDetils.extraFields.map((items, index) => (
                    <li className="tab-content-list" key={index}>
                      <div className="tab-content-left">
                        <span>{`0${index + 1}`} </span>
                        <h2>{items.fieldTitle}</h2>
                      </div>
                      <div className="tab-content-right">
                        <div className="more-content">
                          {items?.moreContent &&
                            items?.moreContent.map((item, i) =>
                              ReactHtmlParser(item.content)
                            )}
                        </div>

                        <ul
                          className={
                            items.liChangeStyle ? "why_list_ul" : "list"
                          }
                        >
                          {items.extraContent &&
                            items.extraContent.map((item, i) => (
                              <li
                                key={i}
                                className={
                                  items.liChangeStyle
                                    ? "why_list"
                                    : `how_owner_list`
                                }
                              >
                                {ReactHtmlParser(item.content)}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="not-found">
          <h1>Project Not Found</h1>
          <h2>please select from below projects</h2>
        </div>
      )}
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
