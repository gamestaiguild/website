import React, { useEffect } from "react";
import IndicatorPagination from "../../components/innerpage-pagination/IndicatorPagination";
import proimg from '../../assets/project-image.png';
import '../../styles/project.scss'
import ProjectsListSlider from "../../components/project/ProjectsListSlider";

const projectListObj = [
  {
    project_img: proimg,
    project_name: 'Project name here',
    project_content: 'Project desription. We link our incubation projects with these investors enabling you to quickly',
  },
  {
    project_img: proimg,
    project_name: 'Project name here',
    project_content: 'Project desription. We link our incubation projects with these investors enabling you to quickly',
  },
  {
    project_img: proimg,
    project_name: 'Project name here',
    project_content: 'Project desription. We link our incubation projects with these investors enabling you to quickly',
  },
  {
    project_img: proimg,
    project_name: 'Project name here',
    project_content: 'Project desription. We link our incubation projects with these investors enabling you to quickly',
  },
  {
    project_img: proimg,
    project_name: 'Project name here',
    project_content: 'Project desription. We link our incubation projects with these investors enabling you to quickly',
  }
]

const Projects = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {

    }
  }, [])

  return (
    <div className="project-page-container">
      <IndicatorPagination title="Project name here" caret="Project name here" />
      <div className="project-innerpage">

        <div className="tab-content">
          <ul>
            <li className="tab-content-list">
              <div className="tab-content-left">
                <img src={proimg} />
              </div>
              <div className="tab-content-right">
                <h4>Gamesta brings value through its experience in the industry. Specialists in crypto and more prudently GameFi, VMG’s core team are looking forward to building one of the most successful guilds ever, one that gives high yields to investors but at the same time empowers players from all over the globe.</h4>
                <p>Through our previous successes, connections, and experience in Crypto Projects, we are able to add a unique set of value add propositions to projects that we incubate.</p>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>02</span>
                <h2>Strategic & Value Add Investor Network </h2>
              </div>
              <div className="tab-content-right">
                <h4>Gamesta works with a wide range of VC’s in the space, with the majority of them already invested into the $GSG token & ecosystem. </h4>
                <p>We link our incubation projects with these investors enabling you to quickly establish a Cap Table of significance.</p>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>03</span>
                <h2>Direct Investment</h2>
              </div>
              <div className="tab-content-right">
                <h4>We put our money where our mouth is. Any project we incubate, we will also invest in.</h4>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>04</span>
                <h2>VMG Marketing Division</h2>
              </div>
              <div className="tab-content-right">
                <h4>Using our experience and know how, we can activate our VMG Marketing team to assist your project, either on a passive approach or a fully fledged marketing strategy (chargeable), including:</h4>
                <ul className="list">
                  <li>Influencer Management & Allocations</li>
                  <li>Content Creation (Creative Articles, Video)</li>
                  <li>Community Management</li>
                  <li>Social Media Management</li>
                  <li>Gleam & Telegram BOT Competitions</li>
                </ul>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>05</span>
                <h2>Brand Association</h2>
              </div>
              <div className="tab-content-right">
                <h4>Gamesta is quickly becoming a behemoth in the crypto industry. </h4>
                <p>Driven by CEO Spencer Tarring’s business accomplishments and experience, any project we associate with immediately gets an uplift in credibility.</p>
              </div>
            </li>

            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>06</span>
                <h2>CEX, DEX & Launchpad Introductions</h2>
              </div>
              <div className="tab-content-right">
                <h4>We have connections to all major Launchpads, CEXs & DEX’s, and will recommend Market Makers for your treasury to ensure a successful and profitable business strategy.</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="pro-sec">
        <h2 className="project-wrapper-title">Other projects</h2>
        <div className="project-box-wrapper">
          {/* {
            projectListObj && projectListObj.map((item, index) => (
              <ProjectsListSlider key={index} img={item.project_img} projectName={item.project_name} projectContent={item.project_content} />
            ))
          } */}
          <ProjectsListSlider />

        </div>
      </div>
    </div>
  );
};

export default Projects;
