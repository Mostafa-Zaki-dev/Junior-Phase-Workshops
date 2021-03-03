import React from 'react';
import { fetchSingleAuthor, fetchAuthorComments, fetchAuthorStories } from '../store/singleAuthor';
import { connect } from 'react-redux';
import CommentsList from './CommentsList';
import StoriesList from './StoriesList';
import { Link, Route } from 'react-router-dom';

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
    const author = info;
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <hr />
        <div id="single-author-nav">
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route
            path="/authors/:authorId/comments"
            render={() => <CommentsList comments={comments} />}
          />
          <Route
            path="/authors/:authorId/stories"
            render={() => <StoriesList stories={stories} />}
          />
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
