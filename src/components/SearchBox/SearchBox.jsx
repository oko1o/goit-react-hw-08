import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.name);

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchContacts">Find contacts by name</label>
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        id="searchContacts"
      />
    </div>
  );
}
