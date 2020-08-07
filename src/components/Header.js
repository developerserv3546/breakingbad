import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        /* TODO */
        <div>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/episodes">Episodes</Link>
            <Link to="/quotes">Quotes</Link>
            <Link to="/deaths">Deaths</Link>
        </div>
    );
};

export default Header;