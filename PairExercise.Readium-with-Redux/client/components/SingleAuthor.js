import React from 'react';
import { fetchSingleAuthor, fetchAuthorComments, fetchAuthorStories } from '../store/singleAuthor';
import { connect } from 'react-redux';

class SingleAuthor extends React.Component {
  componentDidMount() {
    const { authorId } = this.props.match.params;
    this.props.loadSingleAuthor(authorId);
    this.props.loadAuthorComments(authorId);
    this.props.loadAuthorStories(authorId);
  }

  render() {
    // console.log('props: ', this.props);
    const {
      singleAuthor: { info, comments, stories },
    } = this.props;
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{info.name}</h1>
            <p>{info.bio}</p>
          </div>
          <img src={info.imageUrl} />
        </div>
        <hr />
        <div>
          <h4>STORIES</h4>
          <h4>COMMENTS</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleAuthor: state.singleAuthor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleAuthor: (id) => dispatch(fetchSingleAuthor(id)),
    loadAuthorComments: (id) => dispatch(fetchAuthorComments(id)),
    loadAuthorStories: (id) => dispatch(fetchAuthorStories(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAuthor);
