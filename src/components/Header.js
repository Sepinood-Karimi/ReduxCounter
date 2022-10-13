import classes from './Header.module.css';

const Header = () => {

    const logoutHandler = () => {

    }
    return (
        <header className={classes.header}>
            <h1> Redux Auth & Counter </h1>
            <nav>
                    <ul>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
            </nav>
        </header>
    );
};

export default Header;
