import { Link } from "react-router-dom";

const IndicatorPagination = (props) => {
  const { title, caret, proImg } = props;
  return (
    <div className="incubator-page-header" >
      {/* <div className="main-poster-image" style={{backgroundImage:`url(${proImg})`}} > */}
        {/* <img src={proImg} /> */}
      
      <div className="container">
        <div className="pagination">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="caret"></li>
            {caret ? (
              <li>
                <Link to="/incubator">Incubator </Link>
              </li>
            ) : (
              <li>Incubator</li>
            )}
            {caret && (
              <>
                <li className="caret"></li> <li>{caret}</li>
              </>
            )}
          </ul>
        </div>
        <h2 className="pagination-title">{title}</h2>
      </div>
      </div>
    // </div>
  );
};

export default IndicatorPagination;
