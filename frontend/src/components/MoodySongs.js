import {useState} from 'react'

const MoodySongs = () => {
    const [song, setSong] = React.useState([
        {
            title : "Song 1",
            artist : "Artist 1",
            url : "https://example.com/song1.mp3"
        }
    ]);
  return (
    <div>MoodySongs</div>
  )
}

export default MoodySongs