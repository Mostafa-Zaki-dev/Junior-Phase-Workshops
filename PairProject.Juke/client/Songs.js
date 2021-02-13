import React from 'react';

function Song({ currentSong, selectedAlbum, start }) {
  return selectedAlbum.songs.map((song, index) => {
    return (
      <tr key={song.id} className={song.id === currentSong.id ? 'active' : ''}>
        <td>
          <i
            style={{ display: song.id === currentSong.id ? 'none' : 'block' }}
            onClick={() => start(song, song.audioUrl)}
            className="fa fa-play-circle"
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
