import classes from './HomePage.module.css';
import videoImage from '../../images/video-image.jpg';
import fig1 from '../../images/figures/business-3d-young-man-in-formalwear-standing-with-hands-on-hip.png';
import { useWindowSize } from '../Hooks/useWindowSize.js';

export function HomePage() {
    const windowSize = useWindowSize();

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
                    <img
                        className={classes.img}
                        src={videoImage}
                        height={windowSize.height * 0.542}
                        width={windowSize.width * 0.4674}
                        alt=''
                    />
                </a>
                {/* <img
                    style={{ position: 'absolute', top: '10rem', left: '1rem' }}
                    src={fig1}
                    alt=''
                    height={579.37}
                    width={206}
                /> */}
            </section>
        </main>
    );
}
