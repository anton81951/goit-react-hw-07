import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const searchQuery = useSelector(state => state.filters.name);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [contacts, searchQuery]);

  return (
    <ul className={clsx(styles.contactsOrder)}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;