import { useWindowSize } from '../Hooks/useWindowSize.js';
import classes from './Services.module.css';

export function Services(props) {
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
                        <a href='https://jira.elm.sa' className={classes.a}>
                            <li className={classes.li1}>
                                <div style={props.services[0].imgDivStyles}>
                                    <img src={props.services[0].src} style={props.services[0].imgStyles} alt='' />
                                </div>
                                <div style={props.services[0].h1DivStyles}>
                                    <h1 style={props.services[0].h1Styles}>{props.services[0].h1}</h1>
                                </div>
                                <div style={props.services[0].pDivStyles}>
                                    <p style={props.services[0].pStyles}>{props.services[0].p}</p>
                                </div>
                            </li>
                        </a>
                        <a href='https://jira.elm.sa' className={classes.a}>
                            <li className={classes.li2}>
                                <div style={props.services[1].imgDivStyles}>
                                    <img src={props.services[1].src} style={props.services[1].imgStyles} alt='' />
                                </div>
                                <div style={props.services[1].h1DivStyles}>
                                    <h1 style={props.services[1].h1Styles}>{props.services[1].h1}</h1>
                                </div>
                                <div style={props.services[1].pDivStyles}>
                                    <p style={props.services[1].pStyles}>{props.services[1].p}</p>
                                </div>
                            </li>
                        </a>
                        <a href='https://jira.elm.sa' className={classes.a}>
                            <li className={classes.li3}>
                                <div style={props.services[2].imgDivStyles}>
                                    <img src={props.services[2].src} style={props.services[2].imgStyles} alt='' />
                                </div>
                                <div style={props.services[2].h1DivStyles}>
                                    <h1 style={props.services[2].h1Styles}>{props.services[2].h1}</h1>
                                </div>
                                <div style={props.services[2].pDivStyles}>
                                    <p style={props.services[2].pStyles}>{props.services[2].p}</p>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </main>
        </div>
    );
}
