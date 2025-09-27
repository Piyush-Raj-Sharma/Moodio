import React, { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodySongs from "./components/MoodySongs";
import "./App.css";

const App = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className="app-container">
      <FacialExpression setSongs={setSongs} />
      <MoodySongs songs={songs} />
    </div>
  );
};

export default App;
