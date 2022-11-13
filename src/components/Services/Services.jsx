import { useWindowSize } from "../Hooks/useWindowSize.js";
import classes from "./Services.module.css";

export function Services(props) {
  const windowSize = useWindowSize();
  const gridColumn = (windowSize.width * 0.7161) / 3;

  return (
    <div className={classes.services} id='services'>
      <main
        className={classes.main}
        style={{
          gridTemplateColumns: `${gridColumn}px ${gridColumn}px ${gridColumn}px`,
        }}
      >
        <h1 className={classes.h1}>DevOps Services</h1>
        <p className={classes.p}>
          Plan smarter, collaborate better, and ship faster with a set of modern
          DevOps services
        </p>
        <div className={classes.div}>
          <ul className={classes.ul}>
            <li className={classes.li1}>
              <img
                className={classes["li-img"]}
                src={props.services[0].src}
                style={props.services[0].style}
                alt=''
              />
              <h1 className={classes["service-h1"]}>{props.services[0].h1}</h1>
              <p className={classes["service-p"]}>{props.services[0].p}</p>
            </li>
            <li className={classes.li2}>
              <img
                className={classes["li-img"]}
                src={props.services[1].src}
                style={props.services[1].style}
                alt=''
              />
              <h1 className={classes["service-h1"]}>{props.services[1].h1}</h1>
              <p className={classes["service-p"]}>{props.services[1].p}</p>
            </li>
            <li className={classes.li3}>
              <img
                className={classes["li-img"]}
                src={props.services[2].src}
                style={props.services[2].style}
                alt=''
              />
              <h1 className={classes["service-h1"]}>{props.services[2].h1}</h1>
              <p className={classes["service-p"]}>{props.services[2].p}</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
