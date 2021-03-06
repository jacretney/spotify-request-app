import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../ui/Spinner';

const SongGrid = ({ isLoading, songs }) => {
  const parseSongData = (song) => ({
    id: song.id,
    img: song.album.images[0].url, // Highest quality image
    title: song.title,
    artist: song.artist.name,
  });

  const showSongs = () => {
    if (songs.length === 0) {
      return (
        <div>
          <p>No songs :(</p>
        </div>
      );
    }

    return (
      <div className="song-grid">
        {songs.map((song) => {
          const parsed = parseSongData(song);

          return (
            <div className="song-card" key={parsed.id}>
              <img src={parsed.img} alt={`${parsed.title} by ${parsed.artist}`} />
              <h3>{parsed.title}</h3>
              <h4>{parsed.artist}</h4>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {isLoading ? <Spinner /> : showSongs(songs)}
    </div>
  );
};

SongGrid.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SongGrid;
