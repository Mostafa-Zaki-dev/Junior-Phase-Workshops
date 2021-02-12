import React from 'react';

function Player(props) {
  return (
    <div id="player-container">
      <div id="player-controls">
        <div class="row center">
          <i class="fa fa-step-backward"></i>
          <i class="fa fa-pause-circle"></i>
          <i class="fa fa-step-forward"></i>
        </div>
      </div>
    </div>
  );
}

export default Player;
