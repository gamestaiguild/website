import { Link } from "react-router-dom";
// import proimg from "../../assets/project-image.png";
import Slider from "react-slick";
import { projectItemList } from "../../views/Incubator/projectItemList";

// const projectListObj = [
//   {
//     project_img: proimg,
//     project_name: "Project name here 1",
//     project_content:
//       "Project desription. We link our incubation projects with these investors enabling you to quickly",
//   },
//   {
//     project_img: proimg,
//     project_name: "Project name here 2",
//     project_content:
//       "Project desription. We link our incubation projects with these investors enabling you to quickly",
//   },
//   {
//     project_img: proimg,
//     project_name: "Project name here 3",
//     project_content:
//       "Project desription. We link our incubation projects with these investors enabling you to quickly",
//   },
//   {
//     project_img: proimg,
//     project_name: "Project name here 4",
//     project_content:
//       "Project desription. We link our incubation projects with these investors enabling you to quickly",
//   },
//   {
//     project_img: proimg,
//     project_name: "Project name here 5",
//     project_content:
//       "Project desription. We link our incubation projects with these investors enabling you to quickly",
//   },
// ];

const ProjectsListSlider = (props) => {
  const { projectId } = props;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0002 15.6667H27.3335V12.3333H14.0002V0.666656L0.666832 14L14.0002 27.3333V15.6667Z"
          fill="#00B3E8"
        />
      </svg>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9998 15.6667H0.666504V12.3333H13.9998V0.666656L27.3332 14L13.9998 27.3333V15.6667Z"
          fill="#00B3E8"
        />
      </svg>
    </button>
  );
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    speed: 500,
    slidesToShow: projectItemList.length > 3 ? 3 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projectItemList.map(
        (item, index) =>
          item.id !== projectId && (
            <div key={index}>
              <div className="project-box">
                <div className="project-image">
                  <img
                    className={item.isComingSoon ? "blur-poster" : ""}
                    src={item.project_img}
                    alt=""
                  />
                  {item.isComingSoon && (
                    <h1 className="coming-soon">Coming Soon...</h1>
                  )}
                  {item.ribbon && (
                    <div className="ribbon">
                      <div className="txt">Incubated by GAMESTA</div>
                    </div>
                  )}
                </div>
                <div className="project-desc">
                  <h2 className="project-title">{item.project_name}</h2>
                  <p className="project-content">{item.project_content}</p>
                  {!item.isComingSoon && (
                    <div className="project-btn-wrapper">
                      <Link
                        to={`/project/${item.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Read more
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </Slider>
  );
};

export default ProjectsListSlider;
