import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Movies from "./pages/movies";

//components
import Background from "./components/background";
import Movie from "./pages/movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/genres/:genre" exact element={<Movies />} />
        <Route path="/genres/:genre/:movie" exact element={<Movie />} />
      </Routes>
      <Background />
    </Router>
  );
}

export default App;
