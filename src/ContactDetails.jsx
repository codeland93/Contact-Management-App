import { useContext } from 'react';
import ContactContext from './ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return <p>Select a contact to view details</p>;
  }

  return (
    <div>
      <h2>{selectedContact.name}</h2>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetails;
