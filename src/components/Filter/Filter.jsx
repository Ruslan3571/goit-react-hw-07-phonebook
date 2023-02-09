import { getFilter } from 'components/redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = event =>
    dispatch(getFilter(event.currentTarget.value.toLowerCase()));

  return (
    <div style={{ textAlign: 'center' }}>
      <label htmlFor="">
        Find contacts by name
        <input type="text" value={filter} onChange={handleFilter} />
      </label>
    </div>
  );
}
