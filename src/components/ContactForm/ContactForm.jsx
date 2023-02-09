import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';
import s from './ContactForm.module.css';
import { Notify } from 'notiflix';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkDuplicate = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();
    checkDuplicate(name)
      ? Notify.warning(`This ${name} already exist`)
      : dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.contactForm} action="" onSubmit={handleSubmit}>
        <label htmlFor="" className={s.contactLabel}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="" className={s.contactLabel}>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
