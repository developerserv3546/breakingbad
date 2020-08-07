import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import BreakingBadContext from "./context/breaking-bad-context";
import BreakingBadService from "./services/breaking-bad-service";

const breakingBadContext = new BreakingBadService();

ReactDOM.render(
    <BrowserRouter>
        <BreakingBadContext.Provider value={breakingBadContext}>
            <App/>
        </BreakingBadContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

