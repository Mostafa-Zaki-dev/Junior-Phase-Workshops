import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StoriesList = (props) => {
  const stories = props.stories;
  return (
    <div id="stories" className="column">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <Link to={`/stories/${story.id}`}>
            <h3>{story.title}</h3>
          </Link>
          <a>
            <p>{story.author.name}</p>
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
  };
};

export default connect(mapStateToProps)(StoriesList);
