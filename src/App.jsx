import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Movies from "./pages/movies";

//components
import Background from "./components/background";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/genres/:genre" exact element={<Movies />} />
      </Routes>
      <Background />
    </Router>
  );
}

export default App;
