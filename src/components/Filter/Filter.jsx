import { getFilter } from 'components/redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Filter/Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = event =>
    dispatch(getFilter(event.currentTarget.value.toLowerCase()));

  return (
    <div className={s.filterBlock}>
      <div>Find contacts by name</div>
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
}
