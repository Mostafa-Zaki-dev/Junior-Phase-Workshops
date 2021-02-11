import React from 'react';
import ContactRow from './ContactRow';

function ContactList({ contacts, selectContact }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {contacts.map((contact) => {
          return <ContactRow selectContact={selectContact} key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
