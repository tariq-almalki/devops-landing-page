import classes from "./Services.module.css";

export function Services() {
  console.log("client width", document.documentElement.clientWidth);

  console.log("client height", document.documentElement.clientHeight);
  return (
    <>
      <div id='ser' className={`panel ${classes.services}`}>
        <h1 className={classes.h1}> Services</h1>
        <div className={classes["service-box"]}>
          <div className={classes.container}>
            <div className={classes.card}>
              <div className={classes.box}>
                <div className={classes.content}>
                  <h2>01</h2>
                  <h3>Card One</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.box}>
                <div className={classes.content}>
                  <h2>02</h2>
                  <h3>Card Two</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.box}>
                <div className={classes.content}>
                  <h2>03</h2>
                  <h3>Card Three</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={classes.service}>adasda</div>
          <div className={classes.service}>asdasdas</div>
          <div className={classes.service}>asdsad</div> */}
        </div>
      </div>
    </>
  );
}
