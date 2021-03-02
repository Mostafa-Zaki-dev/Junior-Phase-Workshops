import React from 'react';

const fakeStory = {
  title: 'Ships',
  id: 2,
  content: "A ship in port is safe,\nbut that's not what ships are built for",
  author: {
    id: 1,
    name: 'Grace Hopper',
  },
  comments: [
    {
      id: 4,
      content: 'I like ships!',
      author: {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'default-author.png',
      },
    },
  ],
};

class SingleStory extends React.Component {
  render() {
    console.log('match.params >>', this.props.match.params);
    return (
      <div id="single-story" className="column">
        <h1>{fakeStory.title}</h1>
        {fakeStory.content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <h3>Responses:</h3>
        <div id="comments">
          <div className="comment row">
            <img src={fakeStory.comments[0].author.imageUrl} />
            <div className="column">
              <a>
                <h5>{fakeStory.comments[0].author.name}</h5>
              </a>
              <div>{fakeStory.comments[0].content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStory;
