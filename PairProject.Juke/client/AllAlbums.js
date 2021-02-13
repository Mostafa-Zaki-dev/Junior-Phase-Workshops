import React from 'react';
import Album from './Album';

function AllAlbums({ albums, selectAlbum }) {
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        <Album albums={albums} selectAlbum={selectAlbum} />
      </div>
    </div>
  );
}

export default AllAlbums;
