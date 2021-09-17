import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import Error from "../componets/Error";

const Update = (props) => {
    const { id } = useParams();
    const [validations, setValidations] = useState({});
    const history = useHistory();
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => console.error(err));
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id).then((res) => {
            props.setName(res.data.name);

            setAuthor(res.data);
        });
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/authors/" + id, {
                name: props.name,
            })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    setValidations(res.data.errors);
                } else {
                    setValidations({});
                    props.setName("");
                    history.push("/");
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <div>
            {authors.some(() => author._id) ? (
                <form onSubmit={updateAuthor}>
                    <div className="form-group">
                        <label>Name</label>
                        <br />
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => props.setName(e.target.value)}
                            value={props.name}
                        />
                        {validations.name ? (
                            <p className="text-danger">
                                {validations.name.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <Link to={`/`}>
                            {" "}
                            <button className="btn btn-success mt-3 ">
                                Back Home
                            </button>
                        </Link>
                        <input
                            className="btn btn-success mt-3 ms-3"
                            value="Update Author"
                            type="submit"
                        />
                    </div>
                </form>
            ) : (
                <Error />
            )}
        </div>
    );
};

export default Update;
