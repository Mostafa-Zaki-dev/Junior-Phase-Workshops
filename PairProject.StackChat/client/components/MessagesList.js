import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import { connect } from 'react-redux';
import { fetchMessages } from '../store';

class MessagesList extends Component {
  componentDidMount() {
    this.props.fetchInitialMessages();
  }
  render() {
    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const { messages } = this.props;
    const filteredMessages = messages.filter((message) => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          {filteredMessages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <NewMessageEntry />
      </div>
    );
  }
}

// using functional component:

/* 
const MessagesList = (props) => {
  const channelId = +props.match.params.channelId; // because it's a string "1", not a number!
  const { messages } = props;
  const filteredMessages = messages.filter((message) => message.channelId === channelId);

  return (
    <div>
      <ul className="media-list">
        {filteredMessages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <NewMessageEntry />
    </div>
  );
}; 
*/

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialMessages: () => dispatch(fetchMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
