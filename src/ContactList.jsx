import { useContext } from 'react';
import ContactContext from './ContactContext';

const ContactList = () => {
  const { contacts, setSelectedContact } = useContext(ContactContext);

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index} onClick={() => setSelectedContact(contact)}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
