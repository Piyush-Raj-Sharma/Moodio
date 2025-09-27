import React, { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodySongs from "./components/MoodySongs";

const App = () => {
    const [songs, setSongs] = useState([]);
  return (
    <>
      <FacialExpression setSongs = {setSongs} />
      <MoodySongs songs = {songs} />
    </>
  );
};

export default App;
