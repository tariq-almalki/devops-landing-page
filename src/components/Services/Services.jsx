import classes from './Services.module.css';

export function Services(props) {
    return (
        <div
            className={`${classes.services} 
            ${classes[`${props.services[4]['res-services-iphone678-background-image']}`]} 
            ${classes[`${props.services[4]['res-services-iphone-12-13-pro-max-background-image']}`]} 
            ${classes[`${props.services[4]['res-services-iphone-x-background-image']}`]}
            ${classes[`${props.services[4]['res-services-iphone678-plus-background-image']}`]}
            ${classes[`${props.services[4]['res-services-iphone12-13-background-image']}`]}
            ${classes[`${props.services[4]['res-services-ipad-mini-background-image']}`]}
            ${classes[`${props.services[4]['res-services-ipad-pro-background-image']}`]}
            ${classes[`${props.services[4]['res-services-generic-laptop-background-image']}`]}
            ${classes[`${props.services[4]['res-services-156inch-laptop-background-image']}`]}
            ${classes[`${props.services[4]['res-services-1920-1080-screen-background-image']}`]}`}
            style={props.services[3]}
        >
            <main className={classes.main}>
                <h1 className={classes.h1}>DevOps Services</h1>
                <p className={classes.p}>
                    Plan smarter, collaborate better, and ship faster with a set of modern DevOps services
                </p>
                <div className={classes.div1}>
                    <a href='https://jira.elm.sa' className={classes.a1} target='_blank' rel='noreferrer'>
                        <div style={props.services[0].imgDivStyles}>
                            <img src={props.services[0].src} style={props.services[0].imgStyles} alt='' />
                        </div>
                        <div style={props.services[0].h1DivStyles}>
                            <h1 className={classes['res-h1']} style={props.services[0].h1Styles}>
                                {props.services[0].h1}
                            </h1>
                        </div>
                        <div style={props.services[0].pDivStyles}>
                            <p style={props.services[0].pStyles}>{props.services[0].p}</p>
                        </div>
                    </a>
                </div>
                <div className={classes.div2}>
                    <a href='https://jira.elm.sa' className={classes.a2} target='_blank' rel='noreferrer'>
                        <div style={props.services[1].imgDivStyles}>
                            <img src={props.services[1].src} style={props.services[1].imgStyles} alt='' />
                        </div>
                        <div style={props.services[1].h1DivStyles}>
                            <h1 className={classes['res-h1']} style={props.services[1].h1Styles}>
                                {props.services[1].h1}
                            </h1>
                        </div>
                        <div style={props.services[1].pDivStyles}>
                            <p style={props.services[1].pStyles}>{props.services[1].p}</p>
                        </div>
                    </a>
                </div>
                <div className={classes.div3}>
                    <a href='https://jira.elm.sa' className={classes.a3} target='_blank' rel='noreferrer'>
                        <div style={props.services[2].imgDivStyles}>
                            <img src={props.services[2].src} style={props.services[2].imgStyles} alt='' />
                        </div>
                        <div style={props.services[2].h1DivStyles}>
                            <h1 className={classes['res-h1']} style={props.services[2].h1Styles}>
                                {props.services[2].h1}
                            </h1>
                        </div>
                        <div style={props.services[2].pDivStyles}>
                            <p style={props.services[2].pStyles}>{props.services[2].p}</p>
                        </div>
                    </a>
                </div>
            </main>
        </div>
    );
}
