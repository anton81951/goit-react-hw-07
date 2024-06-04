import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={clsx(styles.contactsOrder)}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;