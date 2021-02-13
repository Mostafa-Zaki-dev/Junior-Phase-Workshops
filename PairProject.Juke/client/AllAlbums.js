import React from 'react';
import Album from './Album';

function AllAlbums(props) {
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        <Album />
      </div>
    </div>
  );
}

export default AllAlbums;
