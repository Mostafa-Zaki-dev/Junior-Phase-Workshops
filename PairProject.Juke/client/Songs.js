import React from 'react';

function Song(props) {
  return [1, 2, 3].map((song) => {
    return (
      <tr key={song}>
        <td>
          <i className="fa fa-play-circle" />
        </td>
        <td>{song}</td>
        <td>Song Name</td>
        <td>Artist Name</td>
        <td>Song Genre</td>
      </tr>
    );
  });
}

export default Song;
