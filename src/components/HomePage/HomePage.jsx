import classes from './HomePage.module.css';
import videoImage from '../../images/video-image.jpg';
// import { useWindowSize } from '../Hooks/useWindowSize.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export function HomePage() {
    // const windowSize = useWindowSize();

    function onScrollServicesHandler() {
        window.scrollTo(0, document.documentElement.clientHeight);
    }

    return (
        <main className={classes.homepage} id='homepage'>
            <section className={classes.section1}>
                <h1 className={classes.h1}>
                    Welcome to <span className={classes.span}> DevOps Platform</span>
                </h1>
                <p className={classes.p}>
                    A Rich DevOps Platform with many services. Enabling teams to deliver faster, more frequently and in
                    more reliable fashion.
                </p>
            </section>
            <section className={classes.section2}>
                <a
                    className={classes.a}
                    href='https://www.youtube.com/watch?v=kY0XRCKqRc0&list=PLAP97hPyplzKtqMcwOYm9YS48CpV5SDZs'
                    target='_blank'
                    rel='noreferrer'
                >
                    {/* my screen height 746 width 1526 */}
                    {/* height 404 width 718 */}
                    <img className={classes.img} src={videoImage} height={404} width={718} alt='' />
                    <div className={classes.getStarted}>Get Started</div>
                </a>
                <div className={classes.arrowButtonContainer}>
                    <div className={classes.arrowButton} onClick={onScrollServicesHandler}>
                        <FontAwesomeIcon icon={faArrowDown} className={classes.faArrowDown} />
                        {/* <img className={classes.svgArrow} src={arrowDown} alt='' width={24} height={24} /> */}
                    </div>
                </div>
            </section>
        </main>
    );
}
