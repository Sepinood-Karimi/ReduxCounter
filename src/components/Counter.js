import classes from  './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
    const value = 10;

    const counterSlice = useSelector(state=>state.counter);
    const showSlice = useSelector(state=>state.show)

    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.INCREMENT())
    };
    const decrementHandler = () => {
        dispatch(counterActions.DECREMENT())
    };
    const increaseHandler = () => {
        dispatch(counterActions.INCREASE(value))
    };
    const toggleHandler = () => {
        dispatch(counterActions.TOGGLE())
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showSlice && <div className={classes.value}>{counterSlice}</div>}
            <div>
                <button onClick={incrementHandler}> Increment </button>
                <button onClick={decrementHandler}> Decrement </button>
                <button onClick={increaseHandler}> Increase By {value}  </button>
            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;