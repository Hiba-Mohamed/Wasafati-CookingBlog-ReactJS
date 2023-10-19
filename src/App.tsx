
import { Routes, Route } from "react-router-dom";

import { IntroPage } from "./pages/IntroPage";
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <HashRouter>
          <Route path="/" element={<IntroPage />} />
        </HashRouter>
      </Routes>
    </div>
  );
}

export default App;
