import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import EpisodesPage from "../pages/EpisodesPage";
import QuotesPage from "../pages/QuotesPage";
import DeathsPage from "../pages/DeathsPage";
import ErrorPage from "../pages/ErrorPage";

const App = () => {

    return (
        <main>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/characters" component={CharactersPage}/>
                <Route path="/episodes" component={EpisodesPage}/>
                <Route path="/quotes" component={QuotesPage}/>
                <Route path="/deaths" component={DeathsPage}/>
                <Route path="/404" component={ErrorPage}/>
                <Redirect to="/404"/>
            </Switch>
            <Footer/>
        </main>);
};

export default App;