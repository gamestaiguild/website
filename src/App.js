import React, { useEffect } from 'react'
import { Router } from 'react-router'
import { history } from './common/history'
import Routes from './Routes'
import AOS from 'aos';

const App = () => {

    useEffect(() => {
        AOS.init({
            delay: 250,
            duration: 600,
        });
        return () => {
        }
    }, [])
    return (
        <Router history={history}>
            <Routes />
        </Router>
    )
}

export default App
