import classes from "./Services.module.css";

export function Services() {
  return (
    <div id='ser' className={`panel ${classes.services}`}>
      <h1 className={classes.h1}> Services</h1>
      <div className={classes["service-box"]}>
        <div className={classes.service}>adasda</div>
        <div className={classes.service}>asdasdas</div>
        <div className={classes.service}>asdsad</div>
      </div>
    </div>
  );
}
