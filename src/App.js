import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import StoryPage from "./Components/StoryPage";
import AllStoriesPage from "./Components/AllStoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<StoryPage />} /> */}

        
        <Route path="/story/:id" element={<AllStoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
