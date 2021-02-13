import React from 'react';
import Song from './Songs';

function SingleAlbum({ currentSong, selectedAlbum, toggleAnotherSong, isPlaying }) {
  return (
    <div className="container">
      <div id="single-album" className="column">
        <div className="album">
          <a>
            <img src={selectedAlbum.artworkUrl} />
            <p>{selectedAlbum.name}</p>
            <small>{selectedAlbum.artist.name}</small>
          </a>
        </div>
        <table id="songs">
          <tbody>
            <tr className="gray">
              <td />
              <td>#</td>
              <td>Name</td>
              <td>Artist</td>
              <td>Genre</td>
            </tr>
            <Song
              currentSong={currentSong}
              toggleAnotherSong={toggleAnotherSong}
              isPlaying={isPlaying}
              selectedAlbum={selectedAlbum}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleAlbum;
