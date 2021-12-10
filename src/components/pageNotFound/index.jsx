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
        <h1>404</h1>
        <p>Page Not Found</p>
        <a href="/">Go To Home Page</a>
      </div>
    </div>
  );
};

export default PageNotFound;
