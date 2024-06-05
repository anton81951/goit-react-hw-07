import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import clsx from 'clsx';
import { addContact } from '../../redux/contactsOps';
import { HiUser, HiPhone } from 'react-icons/hi';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: Date.now().toString(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.inputForm}>
          {errors.name && touched.name && <span className={styles.errorMsg}>{errors.name}</span>}
          <div className={styles.inputSection}>
          <div className={clsx(styles.nameBox)}>
            <HiUser />
            <label htmlFor="name">Name</label>
          </div>
          <Field className={styles.inputField} type="text" name="name" id="name" />
          </div>
          {errors.number && touched.number && <span className={styles.errorMsg}>{errors.number}</span>}
          <div className={styles.inputSection}>
          <div className={clsx(styles.nameBox)}>
            <HiPhone />
            <label htmlFor="number">Number</label>
            </div>
            <Field className={styles.inputField} type="text" name="number" id="number" />
          </div>
          <button className={styles.inputBtn} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;