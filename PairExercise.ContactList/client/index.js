import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/contacts');
      console.log(data);
      this.setState({ contacts: data });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { contacts } = this.state;
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <ContactList contacts={contacts} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
