import React from 'react';

const SongGrid = ({ isLoading, songs }) => {
  return (
    <div className="song-grid">
      {isLoading ? <p>Loading</p> : songs.map((song) => {
        return (
          <div className="song-card" key={song.id}>
            <img src={song.img} alt={`${song.title} by ${song.artist}`}/>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default SongGrid;
