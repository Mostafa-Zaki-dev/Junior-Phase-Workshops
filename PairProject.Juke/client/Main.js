import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';

const data = [
  {
    id: 1,
    name: 'No Dummy',
    artworkUrl: 'default-album.jpg',
    artistId: 1,
    artist: {
      id: 1,
      name: 'The Crash Test Dummies',
    },
  },
  {
    id: 2,
    name: 'I React to State',
    artworkUrl: 'default-album.jpg',
    artistId: 1,
    artist: {
      id: 1,
      name: 'The Crash Test Dummies',
    },
  },
];
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }
  render() {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <AllAlbums />
        <Player />
      </div>
    );
  }
}
