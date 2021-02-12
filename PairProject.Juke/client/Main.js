import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
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
