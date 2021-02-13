import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';
import axios from 'axios';

const dummyData = [
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
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/albums');
      // console.log('fetched data >>', data);
      this.setState({ albums: data });
    } catch (err) {
      console.log('error while componentDidmount >>>', err.message);
    }
  }
  render() {
    const { albums } = this.state;
    return (
      <div id="main" className="row container">
        <Sidebar />
        <AllAlbums albums={albums} />
        <Player />
      </div>
    );
  }
}
