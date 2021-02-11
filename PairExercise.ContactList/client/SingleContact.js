import React from 'react';

function SingleContact({ selectedContact }) {
  const { name, email, phone, imageUrl } = selectedContact;
  // console.log('selectedContact >>>>>>', selectedContact);
  // console.log('name >>>>', name);
  return (
    <div id="single-contact">
      <img src={imageUrl} />
      <div id="contact-info">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default SingleContact;
