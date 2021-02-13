import React from 'react';

function Sidebar({ backToAlbums }) {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <a onClick={backToAlbums}>ALBUMS</a>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
