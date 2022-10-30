import classes from './NavBar.module.css';

export function NavBar() {
    return (
        <nav className={classes.nav} id='navbar-id'>
            <ul className={classes.ul}>
                <li className={`${classes['li-logo']} ${classes['li']}`}>Logo</li>
                <li className={`${classes['li-services']} ${classes['li']}`}>Services</li>
                <li className={`${classes['li-team']} ${classes['li']}`}>Team</li>
            </ul>
        </nav>
    );
}
