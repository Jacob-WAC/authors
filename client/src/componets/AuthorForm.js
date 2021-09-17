import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import axios from "axios";
const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook

    const [validations, setValidations] = useState({});
    const history = useHistory();
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios
            .post("http://localhost:8000/api/new", {
                name: props.name,
            })
            .then((res) => {
                console.log(res.data.errors);
                if (res.data.errors) {
                    setValidations(res.data.errors);
                } else {
                    setValidations({});
                    props.setName("");
                    history.push("/");
                }
            })
            .catch((err) => console.log(err));
    };
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Name:</label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    onChange={(e) => props.setName(e.target.value)}
                    value={props.name}
                />
                {validations.name ? (
                    <p className="text-danger">{validations.name.message}</p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <Link to={`/`}>
                    {" "}
                    <button className="btn btn-success mt-3 ">Back Home</button>
                </Link>
                <input
                    className="btn btn-success mt-3 ms-3"
                    value="Create Author"
                    type="submit"
                />
            </div>
        </form>
    );
};
export default AuthorForm;
