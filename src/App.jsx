/* Third Party */
import { BrowserRouter as Router } from "react-router";
import { Analytics } from "@vercel/analytics/react";

/* Components */
import CursorManager from "./Components/Cursor/Context/manager";
import { Routing } from "./routes";

/* Functions */

function App() {
  return (
    <CursorManager>
      <Router>
        <Routing />
      </Router>
      <Analytics />
    </CursorManager>
  );
}

export default App;
