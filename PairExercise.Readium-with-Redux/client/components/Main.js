import React from 'react';
import Navbar from './Navbar';
import StoriesList from './StoriesList';
import SingleStory from './SingleStory';
import { connect } from 'react-redux';
import { fetchStories } from '../store/stories';
import { HashRouter as Router, Route } from 'react-router-dom';

class Main extends React.Component {
  componentDidMount() {
    this.props.loadStories();
  }

  render() {
    return (
      <Router>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path="/" component={StoriesList} />
          <Route exact path="/stories" component={StoriesList} />
          <Route path="/stories/:storyId" component={SingleStory} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStories: () => dispatch(fetchStories()),
  };
};

export default connect(null, mapDispatchToProps)(Main);
