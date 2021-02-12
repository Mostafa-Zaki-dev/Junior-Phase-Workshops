import React from 'react';
import Album from './Album';

function AllAlbums(props) {
  return (
    <div class="container">
      <div id="albums" class="row wrap">
        <Album />
      </div>
    </div>
  );
}

export default AllAlbums;
