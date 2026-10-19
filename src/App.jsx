/* Third Party */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

/* Components */
import CursorManager from "./Components/Cursor/Context/manager";
import { Cursor } from "./Components/Cursor";
import { Routing } from "./routes";

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Router>
        <Routing />
      </Router>
    </CursorManager>
  );
}

export default App;
