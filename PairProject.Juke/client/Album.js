import React from 'react';

function Album({ albums }) {
  console.log('albums in Album comp >>>', albums);
  return albums.map((album) => {
    return (
      <div key={album.id} className="album">
        <a>
          <img src="default-album.jpg" />
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
