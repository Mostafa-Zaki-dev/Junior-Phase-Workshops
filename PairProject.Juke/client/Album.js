import React from 'react';

function Album(props) {
  return [1, 2].map((albumNum) => {
    return (
      <div className="album">
        <a>
          <img src="default-album.jpg" />
          <p>ALBUM {albumNum}</p>
          <small>Artist Name</small>
        </a>
      </div>
    );
  });
}

export default Album;
