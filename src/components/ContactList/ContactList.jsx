import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={s.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} id={id} className={s.contactItem}>
              {name} {number}
              <button
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.paragraf}>
          Ooops no contacts here
          <br />
          <BsEmojiSmileUpsideDown />
        </p>
      )}
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
