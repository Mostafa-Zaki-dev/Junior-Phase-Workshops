import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios from 'axios';
import SingleContact from './SingleContact';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
    };
    this.selectContact = this.selectContact.bind(this);
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/contacts');
      // console.log(data);
      this.setState({ contacts: data });
    } catch (error) {
      console.error(error);
    }
  }

  async selectContact(contactId) {
    try {
      const { data } = await axios.get(`/api/contacts/${contactId}`);
      // console.log(data);
      this.setState({ selectedContact: data });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { contacts, selectedContact } = this.state;
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {selectedContact.id ? (
            <SingleContact selectedContact={selectedContact} />
          ) : (
            <ContactList selectContact={this.selectContact} contacts={contacts} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
