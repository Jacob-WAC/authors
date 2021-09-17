import React, { useState, useEffect } from "react";
import Main from "./views/Main";
import io from "socket.io-client";
import Update from "./views/Update";
import Create from "./views/Create";
import { BrowserRouter, Route } from "react-router-dom";
// state in here and pass it down
function App(props) {
    const [socket] = useState(() => io(":8000"));
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        console.log("Is this running?");
        socket.on("Welcome", (data) => console.log(data));

        return () => socket.disconnect(true);
    }, []);

    return (
        <BrowserRouter>
            <div className="App container">
                <Route exact path="/">
                    <Main
                        loaded={loaded}
                        setLoaded={setLoaded}
                        name={name}
                        setName={setName}
                    />
                </Route>

                <Route path="/author/edit/:id">
                    <Update name={name} setName={setName} />
                </Route>
                <Route exact path="/author/create">
                    <Create
                        name={name}
                        setName={setName}
                        loaded={loaded}
                        setLoaded={setLoaded}
                    />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
