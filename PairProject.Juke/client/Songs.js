import React from 'react';

function Song({ selectedAlbum, start }) {
  return selectedAlbum.songs.map((song, index) => {
    return (
      <tr key={song.id}>
        <td>
          <i onClick={() => start(song.audioUrl)} className="fa fa-play-circle" />
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
