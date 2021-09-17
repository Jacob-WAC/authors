import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = (props) => {
    const { authors } = props;
    const deleteAuthor = (id) => {
        axios
            .delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {})
            .catch((err) => console.error(err));
        props.setLoaded(false);
    };

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => (
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/author/edit/${author._id}`}>
                                    <button>edit</button>
                                </Link>{" "}
                                |{" "}
                                <button
                                    onClick={(e) => {
                                        deleteAuthor(author._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default AuthorList;
