import classes from './NavBar.module.css';
import { useWindowSize } from '../Hooks/useWindowSize.js';

export function NavBar() {
    function onScrollHomePageHandler() {
        window.scrollTo(0, 0);
    }

    function onScrollServicesHandler() {
        window.scrollTo(0, document.documentElement.clientHeight);
    }

    function onScrollTeamHandler() {
        window.scrollTo(0, document.documentElement.clientHeight * 5);
    }

    const windowSize = useWindowSize();

    return (
        <nav className={classes.nav} id='navbar-id' style={{ width: windowSize.width * 0.7161 }}>
            <ul className={classes.ul}>
                <a className={`${classes['a-li-logo']}`} href='#homepage' onClick={onScrollHomePageHandler}>
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
