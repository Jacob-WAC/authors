import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div>
            <h1>Nice try, this isn't a real page though</h1>
            <Link to={`/`}>Back Home</Link>
        </div>
    );
};
export default Error;
