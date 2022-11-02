import classes from './HomePage.module.css';
import videoImage from '../../images/video-image.jpg';

export function HomePage() {
    return (
        <main className={classes.homepage}>
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
                <a href='https://www.youtube.com/watch?v=XUwzASyHr4Q'>
                    <img src={videoImage} height={404} width={718} alt='' />
                </a>
            </section>
        </main>
    );
}
