import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

const audio = document.createElement('audio');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.start = this.start.bind(this);
  }

  start(audioUrl) {
    console.log(audioUrl);
    audio.src = audioUrl;
    audio.load();
    audio.play();
  }

  async selectAlbum(albumId) {
    try {
      const album = await (await axios.get(`/api/albums/${albumId}`)).data;
      // console.log('albumId >>', albumId);
      // console.log('album >>', album);
      this.setState({ selectedAlbum: album });
    } catch (err) {
      console.log('error while selectAlbum >>>', err.message);
    }
  }

  backToAlbums() {
    this.setState({ selectedAlbum: {} });
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
        <Sidebar backToAlbums={this.backToAlbums} />
        {selectedAlbum.id ? (
          <SingleAlbum start={this.start} selectedAlbum={selectedAlbum} />
        ) : (
          <AllAlbums albums={albums} selectAlbum={this.selectAlbum} />
        )}
        <Player />
      </div>
    );
  }
}
