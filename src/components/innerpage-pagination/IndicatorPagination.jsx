

const IndicatorPagination = (props) => {
    const { title, caret } =props
    return(
        <div className="incubator-page-header">
          <div className="container">
            <div className="pagination">
              <ul>
                <li><a href="#">Home</a></li>
                <li className="caret"></li>
                <li>Incubator</li>
                {caret && <> <li className="caret"></li> <li>{caret}</li> </>}
              </ul>
            </div>
            <h2 className="pagination-title">{title}</h2>
          </div>
        </div>
    )
}

export default IndicatorPagination;