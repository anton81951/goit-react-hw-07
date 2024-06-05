import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectIsLoading } from '../redux/contactsSlice';
import css from "./App.module.css"

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b className={css.requestsign}>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default App;
