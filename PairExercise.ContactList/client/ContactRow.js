import React from 'react';

function ContactRow({ contact, selectContact }) {
  return (
    <tr onClick={() => selectContact(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ContactRow;
