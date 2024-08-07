import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        visibleContacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <Contact contactData={contact} />
          </li>
        ))}
    </ul>
  );
}
