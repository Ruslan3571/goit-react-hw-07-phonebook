import { deleteContact } from 'components/redux/contactSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} id={id} className={s.contactItem}>
            {name} {number}
            <button onClick={() => dispatch(deleteContact({ id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
