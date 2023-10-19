
import { Routes, Route } from "react-router-dom";

import { IntroPage } from "./pages/IntroPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </div>
  );
}

export default App;
