import InProgress from "./components/InProgress";
import Home from "./components/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/in-progress" element={<InProgress />} />
      </Routes>
    </>
  );
}

export default App;
