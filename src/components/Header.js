import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/auth-slice";

const Header = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <header className={classes.header}>
            <h1> Redux Auth & Counter </h1>
            <nav>
                <ul>
                    <li>
                        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
