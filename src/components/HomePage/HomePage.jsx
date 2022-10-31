// import { NavBar } from '../NavBar/NavBar.jsx';
import classes from './HomePage.module.css';

export function HomePage() {
    return (
        <div className={classes.homepage}>
            <div className={classes.div1}>
                <h1 className={classes.h1}>
                    Welcome to <span className={classes.span}> DevOps Platform</span>
                </h1>
                <p className={classes.p}>
                    A Rich DevOps Platform with many services. Enabling teams to deliver faster, more frequently and in
                    more reliable fashion.
                </p>
            </div>
        </div>
    );
}
