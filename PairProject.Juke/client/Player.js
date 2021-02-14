import React from 'react';

function Player({ next, prev, toggle, isPlaying, selectedAlbum, currentSong }) {
  const song = currentSong;
  const songlist = selectedAlbum.songs;
  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i onClick={() => prev()} className="fa fa-step-backward"></i>
          <i
            onClick={toggle}
            className={isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
          ></i>
          <i onClick={() => next()} className="fa fa-step-forward"></i>
        </div>
      </div>
    </div>
  );
}

export default Player;
