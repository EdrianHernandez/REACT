import React from "react"

function Counter() {

    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className = "counter">
            <h1>Counter Component</h1>
            <h2 className = "count-display">{count}</h2>
            <button className = "count-button" onClick={increment}>Increment</button>
            <button className = "count-button" onClick={() => setCount(0)}>Reset</button>
            <button className = "count-button" onClick={decrement}>Decrement</button>
        </div>
    );

}

export default Counter

