import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import trimValues from '../../helpers/trimValues';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('This field is required'),
    number: Yup.string()
      .min(3, 'Minimum 3 numbers')
      .max(50, 'Maximum 50 numbers')
      .required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    values = { ...values };
    dispatch(addContact(trimValues(values)));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={numberId} className={css.label}>
          Number
        </label>
        <Field type="text" name="number" id={numberId} className={css.input} />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
