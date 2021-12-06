import React from 'react'
import { Router } from 'react-router'
import { history } from './common/history'
import Routes from './Routes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    )
}

export default App
