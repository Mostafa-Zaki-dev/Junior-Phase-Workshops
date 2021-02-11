import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const contacts = [
  { id: 1, name: 'R2-D2', phone: '222-222-2222', email: 'r2d2@droids.com' },
  { id: 2, name: 'C-3PO', phone: '333-333-3333', email: 'c3po@droids.com' },
  { id: 3, name: 'BB-8', phone: '888-888-8888', email: 'bb8@droids.com' },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts,
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>

              {contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
