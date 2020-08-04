import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import BreakingBadContext from "./context/breaking-bad-context";
import BreakingBadService from "./services/breaking-bad-service";

const breakingBadContext = new BreakingBadService();

ReactDOM.render(
    <BreakingBadContext.Provider value={breakingBadContext}>
        <App/>
    </BreakingBadContext.Provider>,
    document.getElementById('root')
);

