import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
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
