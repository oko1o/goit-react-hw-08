import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
}
