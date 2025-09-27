import { useState, useRef } from "react";
import Loader from "./loader";
import "./MoodySongs.css";

const MoodySongs = ({ songs, loading, setLoading }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  if (songs && songs.length > 0 && loading) {
    setTimeout(() => setLoading(false), 300);
  }

  const handlePlayPause = (song) => {
    if (currentSong && currentSong._id === song._id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(song.audio);
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="moody-songs">
      <h2 className="heading">Recommended Songs</h2>

      {loading ? (
        <Loader />
      ) : (
        <div className="songs-grid">
          {songs.length === 0 ? (
            <p className="empty">No songs found for this mood</p>
          ) : (
            songs.map((song) => (
              <div key={song._id} className="song-card">
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p className="artist">{song.artist}</p>
                </div>

                <button
                  className="play-btn"
                  onClick={() => handlePlayPause(song)}
                >
                  {currentSong && currentSong._id === song._id && isPlaying ? (
                    <i className="ri-pause-circle-fill"></i>
                  ) : (
                    <i className="ri-play-circle-fill"></i>
                  )}
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MoodySongs;
