import React from 'react';

const SongGrid = ({ isLoading, songs }) => {
  const showSongs = (songs) => {
    if (songs.length === 0) {
      return (
        <div>
          <p>No songs :(</p>
        </div>
      )
    }
    return songs.map((song) => {
      return (
        <div className="song-card" key={song.id}>
          <img src={song.img} alt={`${song.title} by ${song.artist}`}/>
          <h3>{song.title}</h3>
          <h4>{song.artist}</h4>
        </div>
      )
    });
  }

  return (
    <div className="song-grid">
      {isLoading ? <p>Loading</p> : showSongs(songs)}
    </div>
  )
}

export default SongGrid;
