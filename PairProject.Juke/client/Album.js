import React from 'react';

function Album({ albums }) {
  return albums.map((album) => {
    return (
      <div key={album.id} className="album">
        <a>
          <img src={album.artworkUrl} />
          <p>
            {/* ALBUM :  */}
            {album.name}
          </p>
          <small>
            {/* Artist Name :  */}
            {album.artist.name}
          </small>
        </a>
      </div>
    );
  });
}

export default Album;
