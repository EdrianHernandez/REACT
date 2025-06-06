import React, {useState, useEffect} from 'react';

function Component() {
    
    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState('green');
    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }

  return(   <>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button>
                <button onClick={changeColor}>Change Color</button>
            </>);
}

export default Component
