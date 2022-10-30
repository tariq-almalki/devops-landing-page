import classes from './Main.module.css';

export function Main(props) {
    return <main className={classes.main}>{props.children}</main>;
}
