import React from 'react';

function Song({ currentSong, toggleAnotherSong, isPlaying, selectedAlbum }) {
  return selectedAlbum.songs.map((song, index) => {
    const isCurrentlyPlaying = song.id === currentSong.id && isPlaying;
    return (
      <tr key={song.id} className={song.id === currentSong.id ? 'active' : ''}>
        <td>
          <i
            onClick={() => toggleAnotherSong(song, selectedAlbum.songs)}
            className={isCurrentlyPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
          />
        </td>
        <td>{index + 1}</td>
        <td>{song.name}</td>
        <td>{selectedAlbum.artist.name}</td>
        <td>{song.genre}</td>
      </tr>
    );
  });
}

export default Song;
