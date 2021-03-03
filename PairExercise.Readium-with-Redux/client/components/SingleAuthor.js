import React from 'react';

class SingleAuthor extends React.Component {
  render() {
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>AUTHOR_NAME</h1>
            <p>AUTHOR_BIO</p>
          </div>
          <img src="AUTHOR_IMG_URL" />
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

export default SingleAuthor;
