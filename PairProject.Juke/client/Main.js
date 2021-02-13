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
      currentSong: {},
      isPlaying: false,
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.toggle = this.toggle.bind(this);
    this.load = this.load.bind(this);
    this.toggleAnotherSong = this.toggleAnotherSong.bind(this);
  }

  pause() {
    audio.pause();
    this.setState({ isPlaying: false });
  }

  play() {
    audio.play();
    this.setState({ isPlaying: true });
  }

  //  it is better to make the load function in separet of play function in order not to load the same song again and again if we are pausing and playing the same song ;)

  load(song) {
    audio.src = song.audioUrl;
    audio.load();
    this.setState({ currentSong: song });
  }

  //start a new song
  start(song) {
    this.pause();
    this.load(song);
    this.play();
  }

  // toggle the same song
  toggle() {
    this.state.isPlaying ? this.pause() : this.play();
  }
  // toggle the Another song
  toggleAnotherSong(song) {
    if (song.id !== this.state.currentSong.id) {
      // console.log('toggleAnotherSong is firing start()');
      this.start(song);
    } else {
      // console.log('toggleAnotherSong is firing toggle()');
      this.toggle();
    }
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
    const { albums, selectedAlbum, currentSong, isPlaying } = this.state;
    return (
      <div id="main" className="row container">
        <Sidebar backToAlbums={this.backToAlbums} />
        {selectedAlbum.id ? (
          <SingleAlbum
            currentSong={currentSong}
            toggleAnotherSong={this.toggleAnotherSong}
            isPlaying={isPlaying}
            selectedAlbum={selectedAlbum}
          />
        ) : (
          <AllAlbums albums={albums} selectAlbum={this.selectAlbum} />
        )}
        <Player />
      </div>
    );
  }
}
