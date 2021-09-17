import React, { useState } from "react";
import Main from "./views/Main";

import Update from "./views/Update";
import Create from "./views/Create";
import { BrowserRouter, Route } from "react-router-dom";

// state in here and pass it down
function App(props) {
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);

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
