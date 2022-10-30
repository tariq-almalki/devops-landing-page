import { NavBar } from '../NavBar/NavBar.jsx';
import classes from './HomePage.module.css';

export function HomePage() {
    return (
        <div className={classes.homepage}>
            <NavBar />
        </div>
    );
}
