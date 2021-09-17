import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorList from "../componets/AuthorList";
import axios from "axios";
const Main = (props) => {
    const { name, setName, loaded, setLoaded } = props;
    const [authors, setAuthors] = useState([]);
    props.setName("");
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, [loaded]);

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/author/create`}>Add New Author</Link>
            <p>We have qoutes by:</p>
            {loaded && <AuthorList authors={authors} setLoaded={setLoaded} />}
        </div>
    );
};
export default Main;
