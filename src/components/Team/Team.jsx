import classes from "./Team.module.css";
import "./team.css";

export function Team() {
  return (
    <>
      <div className={classes.team} id='teams'>
        <div className={classes.container}>
          <h1 className={classes.header}>Technology Standards & Design Team</h1>
          <div className={`cardCont`}>
            <div className='cardBack'>
              <h1 className={classes.header}>Director, Email: kkundi@elm.sa</h1>
            </div>
            <div className='cardFront'>
              <h1 className={`${classes["level-1"]} ${classes.rectangle}`}>
                Kamran Kundi
              </h1>
            </div>
          </div>
          <ol className={classes["level-2-wrapper"]}>
            <li className={classes["left"]}>
              <div className='cardCont'>
                <div className='cardBack contLeft'>
                  <h5>
                    Senior Technical Consultant, Email: abdelmawgood@elm.sa
                  </h5>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Ahmed Mawgood
                  </h3>
                </div>
              </div>
            </li>

            <li className={classes["right"]}>
              <div className='cardCont'>
                <div className='cardBack contRight'>
                  <h4>Technical Consultant, Email: kalkasaji@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Khaled Alkasaji
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["left"]}>
              <div className='cardCont'>
                <div className='cardBack contLeft'>
                  <h4>Senior Engineer, Email: ksathickan@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Kwaza Sathickan
                  </h3>
                </div>
              </div>
            </li>

            <li className={classes["right"]}>
              <div className='cardCont'>
                <div className='cardBack contRight'>
                  <h4>Technical Consultant, Email: mrahim@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Muhammed Asif
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["left"]}>
              <div className='cardCont'>
                <div className='cardBack contLeft'>
                  <h4>Senior Engineer, Email: smansoor@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Syed Mansoor
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["right"]}>
              <div className='cardCont'>
                <div className='cardBack contRight'>
                  <h4>Senior Manager, Email: mmojahed@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Mohamed Mojahed
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["left"]}>
              <div className='cardCont'>
                <div className='cardBack contLeft'>
                  <h4>Technical Consultant, Email: malkamary@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Mohamed Alkamary
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["right"]}>
              <div className='cardCont'>
                <div className='cardBack contRight'>
                  <h4>Senior Manager, Email: muahmed@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Muhammad Ahmed
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["left"]}>
              <div className='cardCont'>
                <div className='cardBack contLeft'>
                  <h4>Senior Architect: srahmed@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Syed Rizwan Ahmed
                  </h3>
                </div>
              </div>
            </li>
            <li className={classes["right"]}>
              <div className='cardCont'>
                <div className='cardBack contRight'>
                  <h4>Senior QA Architect, Email: tmohammad@elm.sa</h4>
                </div>
                <div className='cardFront'>
                  <h3 className={`${classes["level-2"]} ${classes.rectangle}`}>
                    Tajuddin Khamruddin
                  </h3>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <footer className={classes.footer}>
          <p>Created By: Tarik Almalki & Faisal Altuwayli</p>
        </footer>
      </div>
    </>
  );
}
