import React from 'react';
import Album from './Album';

function AllAlbums({ albums }) {
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        <Album albums={albums} />
      </div>
    </div>
  );
}

export default AllAlbums;
