import React from 'react';
import { fetchSingleStory } from '../store/singleStory';
import { connect } from 'react-redux';

class SingleStory extends React.Component {
  componentDidMount() {
    const { storyId } = this.props.match.params;
    this.props.loadSingleStory(storyId);
  }

  render() {
    // console.log('props >>', this.props);
    const { story } = this.props;
    const content = story.content || ''; // default to empty string
    const comments = story.comments || []; // default to empty array
    return (
      <div id="single-story" className="column">
        <h1>{story.title}</h1>
        {content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <h3>Responses:</h3>
        {comments.map((comment, i) => {
          return (
            <div key={i} id="comments">
              <div className="comment row">
                <img src={comment.author.imageUrl} />
                <div className="column">
                  <a>
                    <h5>{comment.author.name}</h5>
                  </a>
                  <div>{comment.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.singleStory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleStory: (id) => dispatch(fetchSingleStory(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStory);
