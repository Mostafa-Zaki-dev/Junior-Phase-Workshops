import React from 'react';

function ContactList({ contacts }) {
  return (
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
  );
}

export default ContactList;
