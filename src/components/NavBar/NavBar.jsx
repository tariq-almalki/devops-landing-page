import classes from './NavBar.module.css';

export function NavBar() {
    function onScrollServicesHandler() {
        window.scrollTo(0, document.documentElement.clientHeight);
    }

    function onScrollTeamHandler() {
        window.scrollTo(0, document.documentElement.clientHeight * 3);
    }

    return (
        <nav className={classes.nav} id='navbar-id'>
            <ul className={classes.ul}>
                <a className={`${classes['a-li-logo']}`} href='#services'>
                    <li className={`${classes['li-logo']} ${classes['li']}`}>Logo</li>
                </a>
                <a className={`${classes['a-li-services']}`} href='#services' onClick={onScrollServicesHandler}>
                    <li className={`${classes['li-services']} ${classes['li']}`}>Services</li>
                </a>
                <a className={`${classes['a-li-team']} `} href='#services' onClick={onScrollTeamHandler}>
                    <li className={`${classes['li-team']} ${classes['li']}`}>Team</li>
                </a>
            </ul>
        </nav>
    );
}
