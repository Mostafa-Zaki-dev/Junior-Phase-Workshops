import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AllAuthors = (props) => {
  const authors = props.authors;
  return (
    <div id="authors" className="column">
      {authors.map((author) => (
        <Link to={`/authors/${author.id}`} key={author.id}>
          <div className="author row">
            <img src={author.imageUrl} />
            <p>{author.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
  };
};

export default connect(mapStateToProps)(AllAuthors);
