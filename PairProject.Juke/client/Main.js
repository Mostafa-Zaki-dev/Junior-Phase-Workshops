import React from 'react';
import AllAlbums from './AllAlbums';
import Player from './Player';
import Sidebar from './Sidebar';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

const audio = document.createElement('audio');

function skipTo(nextOrprev, { currentSong, songsList }) {
  const songsIdArr = songsList.map((song) => song.id);
  const CurrentSongIndex = songsIdArr.indexOf(currentSong.id);
  let skipedToIndex = CurrentSongIndex + nextOrprev;
  if (skipedToIndex < 0) {
    skipedToIndex = songsIdArr.length - 1;
  } else if (skipedToIndex > songsIdArr.length - 1) {
    skipedToIndex = 0;
  }
  return [songsList[skipedToIndex], songsList];
}

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {},
      isPlaying: false,
      songsList: [],
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.toggle = this.toggle.bind(this);
    this.load = this.load.bind(this);
    this.toggleAnotherSong = this.toggleAnotherSong.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
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

  load(song, songs) {
    audio.src = song.audioUrl;
    audio.load();
    this.setState({ currentSong: song, songsList: songs });
  }

  //start a new song
  start(song, songs) {
    this.pause();
    this.load(song, songs);
    this.play();
  }

  next() {
    this.start(...skipTo(1, this.state));
  }

  prev() {
    this.start(...skipTo(-1, this.state));
  }

  // toggle the same song
  toggle() {
    this.state.isPlaying ? this.pause() : this.play();
  }
  // toggle the Another song
  toggleAnotherSong(song, songs) {
    if (song.id !== this.state.currentSong.id) {
      // console.log('toggleAnotherSong is firing start()');
      this.start(song, songs);
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
      audio.addEventListener('ended', () => {
        this.next(currentSong, selectedAlbum.songs);
      });
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
        <Player
          next={this.next}
          prev={this.prev}
          toggle={this.toggle}
          isPlaying={isPlaying}
          selectedAlbum={selectedAlbum}
          currentSong={currentSong}
        />
      </div>
    );
  }
}
