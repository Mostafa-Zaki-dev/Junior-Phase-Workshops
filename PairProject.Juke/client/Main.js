import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

const dummyData = {
  id: 3,
  name: 'Chain React-ion',
  artworkUrl: 'default-album.jpg',
  artistId: 1,
  artist: {
    id: 1,
    name: 'The Crash Test Dummies',
  },
  songs: [
    {
      id: 13,
      name: 'Set Some State',
      audioUrl:
        'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3',
      genre: 'Instrumental',
      albumId: 2,
      artistId: 1,
    },
  ],
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
    };
    this.selectAlbum = this.selectAlbum.bind(this);
  }
  selectAlbum() {
    this.setState({ selectedAlbum: dummyData });
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
    const { albums, selectedAlbum } = this.state;
    return (
      <div id="main" className="row container">
        <Sidebar />
        {selectedAlbum.id ? (
          <SingleAlbum />
        ) : (
          <AllAlbums albums={albums} selectAlbum={this.selectAlbum} />
        )}
        <Player />
      </div>
    );
  }
}
