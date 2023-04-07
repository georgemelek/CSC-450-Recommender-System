import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import MovieList from "./components/movieList";
import Questionnaire from "./components/questionnaire";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
