import classes from './HomePage.module.css';

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
                <video
                    src='https://wiki.elm.sa/display/TAKS/Dojo+Digital+Library?preview=/99575719/99575718/Week-1_Session-1_2020-11-08.mp4'
                    poster='../../images/misc/video-image.jpg'
                    height={504}
                    width={860}
                ></video>
            </section>
        </main>
    );
}
