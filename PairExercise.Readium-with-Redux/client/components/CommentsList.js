import React from 'react';

const CommentsList = (props) => {
  const comments = props.comments || []; // default to empty array to avoid TypeError due to first render with empty comments
  return comments.map((comment, i) => {
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
  });
};

export default CommentsList;
