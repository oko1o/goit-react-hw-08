import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import trimValues from '../../helpers/trimValues';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('This field is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .max(50, 'Maximum 50 characters')
      .required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    values = { ...values };
    dispatch(register(trimValues(values)));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={emailId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailId} className={css.input} />
        <ErrorMessage name="email" component="span" className={css.error} />
        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordId}
          className={css.input}
        />
        <ErrorMessage name="password" component="span" className={css.error} />
        <button type="submit" className={css.button}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
}
