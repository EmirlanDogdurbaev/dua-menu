import Event from "./Event/Event.jsx"
import classes from "./Events.module.scss"
const Events = () => {
    return (
        <div className={classes.Events}>
            <section>
                <h2>events</h2>
                <span className={classes.line}></span>
            </section>
            <Event/>
            <Event/>
            <Event/>
        </div>
    )
}
export default Events;