import React, { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodySongs from "./components/MoodySongs";
import "./App.css";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <FacialExpression setSongs={setSongs} setLoading = {setLoading} />
      <MoodySongs songs={songs} loading = {loading} setLoading = {setLoading} />
    </div>
  );
};

export default App;
