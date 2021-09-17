import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import AuthorForm from "../componets/AuthorForm";

const Create = (props) => {
    const { name, setName } = props;

    return (
        <div>
            <AuthorForm name={name} setName={setName} />
        </div>
    );
};
export default Create;
