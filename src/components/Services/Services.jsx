import { useWindowSize } from '../Hooks/useWindowSize.js';
import classes from './Services.module.css';

export function Services() {
    const windowSize = useWindowSize();
    const gridColumn = (windowSize.width * 0.7161) / 3;

    return (
        <div className={classes.services} id='services'>
            <main
                className={classes.main}
                style={{ gridTemplateColumns: `${gridColumn}px ${gridColumn}px ${gridColumn}px` }}
            >
                <h1 className={classes.h1}>DevOps Services</h1>
                <p className={classes.p}>
                    Plan smarter, collaborate better, and ship faster with a set of modern DevOps services
                </p>
                <div className={classes.div}>
                    <ul className={classes.ul}>
                        <li className={classes.li1}></li>
                        <li className={classes.li2}></li>
                        <li className={classes.li3}></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
