import classes from  './Counter.module.css'

const Counter = () => {
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>counter value</div>
            <div>
                <button> Increment </button>
                <button> Decrement </button>
                <button> Increase By  </button>
            </div>
            <button>Toggle Counter</button>
        </main>
    );
};

export default Counter;