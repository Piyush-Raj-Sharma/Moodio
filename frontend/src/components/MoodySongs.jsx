import { useState } from "react";
import "./MoodySongs.css";

const MoodySongs = () => {
  const [songs, setSongS] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "https://example.com/song1.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      url: "https://example.com/song2.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      url: "https://example.com/song3.mp3",
    },
  ]);
  return (
    <div className="moody-songs">
      <h2>Recommended Songs</h2>

      {songs.map((song, index) => (
        <div key={index} className="song">
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-btn">
            <i className="ri-play-circle-fill"></i>
            <i className="ri-pause-circle-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodySongs;
