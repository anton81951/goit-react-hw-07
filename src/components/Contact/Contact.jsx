import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './Contact.module.css';
import { HiUser, HiPhone } from 'react-icons/hi';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={clsx(styles.contactContainer)}>
      <address>
        <div className={clsx(styles.nameBox)}>
          <HiUser />
          <span className={clsx(styles.nameSize)}>{contact.name}</span>
        </div>
        <div className={clsx(styles.nameBox)}>
          <HiPhone />
          <span className={clsx(styles.nameSize)}>{contact.number}</span>
        </div>
      </address>
      <form>
        <button
          type="button"
          className={clsx(styles.buttonFrame)}
          onClick={handleDelete}
          aria-label={`Delete ${contact.name}`}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Contact;