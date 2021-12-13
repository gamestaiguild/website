import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/pageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found-logo">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="page-not-found-conten">
        <div className="not-found-wrapper"><h1>4</h1><h1 style={{color: "#FFFFFF"}}>0</h1><h1>4</h1></div>
        <p>Page Not Found</p>
        <a href="/">Go To Home Page</a>
      </div>
    </div>
  );
};

export default PageNotFound;
