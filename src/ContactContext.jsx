import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts] = useState([
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '987-654-3210' },
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};


ContactProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that children is required
};

export default ContactContext;
