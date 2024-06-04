import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import styles from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filters.name);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Formik initialValues={{ search: value }} onSubmit={() => {}}>
      <Form className={styles.searchBox}>
        <label htmlFor="search">Find contacts by name</label>
        <Field
          className={styles.searchField}
          type="text"
          name="search"
          id="search"
          placeholder="Enter name"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;